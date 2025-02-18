import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav></nav>
        </header>
        <main className="flex min-h-screen w-full flex-col items-center justify-center">
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
