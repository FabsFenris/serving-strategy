import React from 'react';

export default function CheckoutPage() {
  const subtotal = 30.00;
  const promoCreditApplied = 10.00;
  const deliveryFee = 5.00;
  const finalAmountPayable = (subtotal - promoCreditApplied) + deliveryFee;

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#F9F9F8', minHeight: '100vh', color: '#111827' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#064E3B' }}>Checkout</h1>
        <p style={{ color: '#4B5563', fontSize: '14px' }}>Review your store order</p>
      </header>

      <div style={{ backgroundColor: '#FFF', padding: '20px', borderRadius: '12px', border: '1px solid #E5E7EB', maxWidth: '500px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', borderBottom: '1px solid #F3F4F6', paddingBottom: '8px' }}>Order Summary</h2>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
          <span>Items Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: '#047857' }}>
          <span>Promotional Credit Applied</span>
          <span>-${promoCreditApplied.toFixed(2)}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '14px' }}>
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px', borderTop: '2px solid #E5E7EB', fontWeight: 'bold', fontSize: '16px', color: '#064E3B' }}>
          <span>Amount Payable (Funded Balance)</span>
          <span>${finalAmountPayable.toFixed(2)}</span>
        </div>

        <button style={{ width: '100%', marginTop: '20px', backgroundColor: '#064E3B', color: '#FFF', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: '600', fontSize: '14px' }}>
          Confirm & Pay ${finalAmountPayable.toFixed(2)}
        </button>
      </div>
    </div>
  );
}
