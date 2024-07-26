import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | Alfa Prima',
    default: 'Undangan | Alfa Prima',
  },
  description: "Menjadi pilihan pertama dari perusahaan-perusahaan yang membutuhkan SDM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
