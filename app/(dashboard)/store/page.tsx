import React from 'react';

const PRODUCTS = [
  { id: '1', name: 'Essential Grocery Pack', price: 18.00, category: 'Groceries', desc: 'Rice, pasta and everyday cooking essentials.', promoEligible: true },
  { id: '2', name: 'Household Cleaning Essentials', price: 15.00, category: 'Home', desc: 'Laundry detergent, dish soap, and cleaner.', promoEligible: true },
  { id: '3', name: 'Personal Care Bundle', price: 12.00, category: 'Personal Care', desc: 'Toothpaste, shampoo, and bath soap.', promoEligible: true },
];

export default function StorePage() {
  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#F9F9F8', minHeight: '100vh', color: '#111827' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#064E3B' }}>Serving Strategy Store</h1>
        <p style={{ color: '#4B5563', fontSize: '14px' }}>Everyday necessities & household items</p>
      </header>

      <div style={{ display: 'grid', gap: '16px', maxWidth: '600px' }}>
        {PRODUCTS.map((item) => (
          <div key={item.id} style={{ backgroundColor: '#FFF', padding: '16px', borderRadius: '12px', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0' }}>{item.name}</h3>
                <span style={{ fontWeight: 'bold', color: '#064E3B' }}>${item.price.toFixed(2)}</span>
              </div>
              <p style={{ fontSize: '13px', color: '#6B7280', margin: '0 0 12px 0' }}>{item.desc}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid #F3F4F6' }}>
              {item.promoEligible && (
                <span style={{ fontSize: '11px', backgroundColor: '#ECFDF5', color: '#047857', padding: '4px 8px', borderRadius: '12px', fontWeight: '500' }}>
                  Eligible for Promo Credit
                </span>
              )}
              <button style={{ backgroundColor: '#064E3B', color: '#FFF', border: 'none', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
