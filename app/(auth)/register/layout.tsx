import React from 'react';

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      {children}
    </div>
  );
}
