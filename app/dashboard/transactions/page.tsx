import React from 'react';

const TRANSACTIONS = [
  { id: 'tx_101', date: '2026-08-18', type: 'Account Funding', amount: '+$30.00', status: 'Completed', detail: 'Card Deposit' },
  { id: 'tx_102', date: '2026-08-18', type: 'Promo Credit Grant', amount: '+$10.00', status: 'Completed', detail: 'Store Bonus' },
  { id: 'tx_103', date: '2026-08-19', type: 'Store Order #8421', amount: '-$25.00', status: 'Processing', detail: 'Groceries' },
];

export default function TransactionsPage() {
  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#F9F9F8', minHeight: '100vh', color: '#111827' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#064E3B' }}>Transaction Activity</h1>
        <p style={{ color: '#4B5563', fontSize: '14px' }}>Ledger audit history</p>
      </header>

      <div style={{ maxWidth: '600px' }}>
        {TRANSACTIONS.map((tx) => (
          <div key={tx.id} style={{ backgroundColor: '#FFF', padding: '14px', borderRadius: '8px', border: '1px solid #E5E7EB', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '14px', fontWeight: '600', display: 'block' }}>{tx.type}</span>
              <span style={{ fontSize: '12px', color: '#6B7280' }}>{tx.date} • {tx.detail}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: tx.amount.startsWith('+') ? '#047857' : '#111827' }}>{tx.amount}</span>
              <span style={{ fontSize: '11px', display: 'block', color: '#6B7280' }}>{tx.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
