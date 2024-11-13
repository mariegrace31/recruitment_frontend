import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200','300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
