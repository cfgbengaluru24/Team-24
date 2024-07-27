// components/market-layout.tsx
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-brown-100">
      <header className="bg-green-700 text-white shadow">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">The Shola Market Place</h1>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
