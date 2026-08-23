import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pollería',
  description: 'Sistema interno de gestión para una pollería.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
