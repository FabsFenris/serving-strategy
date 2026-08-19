import Prisma from '@/lib/prisma';

export async function processStoreCheckout({
  userId,
  cartSubtotal,
  deliveryFee,
  items
}: {
  userId: string;
  cartSubtotal: number;
  deliveryFee: number;
  items: Array<{ productId: string; quantity: number; price: number }>;
}) {
  return await Prisma.$transaction(async (tx) => {
    // 1. Fetch user ledger & active promo credits
    const ledger = await tx.ledgerAccount.findUnique({ where: { userId } });
    const promoCredits = await tx.promotionalCredit.findMany({
      where: { userId, remainingAmount: { gt: 0 } },
      orderBy: { issuedAt: 'asc' }
    });

    if (!ledger) throw new Error("Ledger account not found");

    const totalPromoAvailable = promoCredits.reduce(
      (sum, c) => sum + Number(c.remainingAmount), 0
    );

    const totalCost = cartSubtotal + deliveryFee;

    // 2. Rule: Promo Credit applied FIRST up to cartSubtotal (not delivery fee)
    let promoToApply = Math.min(cartSubtotal, totalPromoAvailable);
    let remainingToPayWithFunded = totalCost - promoToApply;

    const availableFunded = Number(ledger.fundedBalance);

    if (availableFunded < remainingToPayWithFunded) {
      throw new Error("Insufficient funds. Please top up your account balance.");
    }

    // 3. Deduct Promo Credits sequentially (FIFO)
    let promoNeeded = promoToApply;
    for (const credit of promoCredits) {
      if (promoNeeded <= 0) break;
      const currentRem = Number(credit.remainingAmount);
      const deduct = Math.min(currentRem, promoNeeded);
      
      await tx.promotionalCredit.update({
        where: { id: credit.id },
        data: { remainingAmount: { decrement: deduct } }
      });

      promoNeeded -= deduct;
    }

    // 4. Deduct remaining from funded balance
    await tx.ledgerAccount.update({
      where: { userId },
      data: { fundedBalance: { decrement: remainingToPayWithFunded } }
    });

    // 5. Create Order & Ledger Transaction
    const order = await tx.order.create({
      data: {
        userId,
        subtotal: cartSubtotal,
        promoCreditApplied: promoToApply,
        fundedBalanceApplied: remainingToPayWithFunded,
        deliveryFee,
        totalPaid: totalCost,
        status: 'PROCESSING',
        shippingAddress: {},
        items: {
          create: items.map(i => ({
            productId: i.productId,
            quantity: i.quantity,
            unitPrice: i.price
          }))
        }
      }
    });

    await tx.transaction.create({
      data: {
        userId,
        type: 'STORE_PURCHASE',
        amount: totalCost,
        fundedImpact: -remainingToPayWithFunded,
        promoImpact: -promoToApply,
        status: 'COMPLETED',
        description: `Order #${order.id.slice(0, 8)} purchase`
      }
    });

    return order;
  });
}
