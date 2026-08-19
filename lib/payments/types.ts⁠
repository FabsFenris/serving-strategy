// lib/payments/types.ts
export interface PaymentIntentRequest {
  userId: string;
  amount: number;
  currency: string;
  paymentMethod: 'CARD' | 'BANK_TRANSFER' | 'STABLECOIN' | 'BITCOIN';
  metadata?: Record<string, any>;
}

export interface PaymentIntentResult {
  transactionId: string;
  providerReference: string;
  redirectUrl?: string;
  payAddress?: string; // For Crypto/BTC
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
}

export interface PaymentProviderAdapter {
  createPaymentIntent(request: PaymentIntentRequest): Promise<PaymentIntentResult>;
  verifyWebhookSignature(headers: Record<string, string>, body: string): boolean;
  processWebhookEvent(payload: any): Promise<{ transactionId: string; success: boolean }>;
}
