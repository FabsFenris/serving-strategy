import React from 'react';

export default function RewardsPage() {
  // Demo State (Matches specifications)
  const availablePromoCredit = 10.00;
  const usedPromoCredit = 0.00;
  const expiryDate = '2026-12-31';

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#FAF9F6', minHeight: '100vh', color: '#1A1A1A' }}>
      
      {/* Header */}
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#064E3B', margin: '0 0 6px 0' }}>
          Promotional Rewards
        </h1>
        <p style={{ color: '#4B5563', fontSize: '14px', margin: 0 }}>
          Manage your store credit bonuses and view redemption rules.
        </p>
      </header>

      {/* Credit Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', maxWidth: '600px', marginBottom: '24px' }}>
        
        <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '12px', color: '#047857', fontWeight: '600' }}>Available Credit</span>
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#064E3B', margin: '4px 0 0 0' }}>
            ${availablePromoCredit.toFixed(2)}
          </h2>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: '500' }}>Redeemed Credit</span>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#374151', margin: '4px 0 0 0' }}>
            ${usedPromoCredit.toFixed(2)}
          </h2>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: '500' }}>Next Expiry</span>
          <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#111827', margin: '8px 0 0 0' }}>
            {expiryDate}
          </h2>
        </div>

      </div>

      {/* Explainer Box */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid #E5E7EB', maxWidth: '600px', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#064E3B', margin: '0 0 12px 0' }}>
          Understanding Promotional Credit
        </h2>
        
        <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.6', margin: '0 0 16px 0' }}>
          Eligible account funding may qualify for promotional shopping credit. Promotional credit is restricted exclusively to eligible Serving Strategy store purchases and is not cash or an investment return.
        </p>

        <div style={{ backgroundColor: '#ECFDF5', borderLeft: '4px solid #10B981', padding: '14px', borderRadius: '6px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#065F46', margin: '0 0 6px 0' }}>
            Key Rules & Restrictions:
          </h4>
          <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#047857', lineHeight: '1.5' }}>
            <li>Promotional credit cannot be withdrawn or converted to fiat/crypto cash.</li>
            <li>Applied automatically at store checkout toward eligible marketplace items.</li>
            <li>Does not cover delivery fees or non-eligible service costs.</li>
            <li>Subject to admin eligibility limits and promotional expiration dates.</li>
          </ul>
        </div>
      </div>

      {/* Action CTA */}
      <div style={{ maxWidth: '600px', display: 'flex', gap: '12px' }}>
        <a href="/store" style={{ flex: 1, textAlign: 'center', backgroundColor: '#064E3B', color: '#FFFFFF', padding: '12px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', fontSize: '14px' }}>
          Shop Marketplace
        </a>
        <a href="/wallet" style={{ flex: 1, textAlign: 'center', backgroundColor: '#FFFFFF', color: '#111827', padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB', fontWeight: '600', textDecoration: 'none', fontSize: '14px' }}>
          Fund Account
        </a>
      </div>

    </div>
  );
}
