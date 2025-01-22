"use client"
import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from 'next/font/google';
import { usePathname } from 'next/navigation';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={poppins.className}>
        {pathname !== '/dashboard' && <Navbar />}
        {children}
      </body>
    </html>
  );
}
