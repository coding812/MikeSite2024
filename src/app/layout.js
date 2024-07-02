
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mike McDowell, PhD.",
  description: "Personal site and works of Mike McDowell, PhD.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
