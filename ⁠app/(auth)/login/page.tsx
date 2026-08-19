import React from 'react';

export default function LoginPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9F9F8', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '24px', fontFamily: 'sans-serif', color: '#111827' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#FFFFFF', padding: '32px 24px', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
        
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', backgroundColor: '#064E3B', color: '#FFFFFF', borderRadius: '12px', fontWeight: 'bold', fontSize: '18px', marginBottom: '12px' }}>
            SS
          </div>
          <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#064E3B', margin: '0 0 6px 0' }}>Serving Strategy</h1>
          <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>Sign in to manage your balances and orders</p>
        </div>

        {/* Login Form */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <label style={{ fontSize: '13px', fontWeight: '500', color: '#374151' }}>Password</label>
              <a href="/forgot-password" style={{ fontSize: '12px', color: '#047857', textDecoration: 'none', fontWeight: '500' }}>Forgot?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <button 
            type="button" 
            style={{ width: '100%', backgroundColor: '#064E3B', color: '#FFFFFF', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '14px', cursor: 'pointer', marginTop: '8px' }}
          >
            Sign In
          </button>
        </form>

        {/* Navigation Link */}
        <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '13px', color: '#6B7280' }}>
          Don't have an account?{' '}
          <a href="/register" style={{ color: '#064E3B', fontWeight: '600', textDecoration: 'none' }}>Create account</a>
        </div>

      </div>
    </div>
  );
}
