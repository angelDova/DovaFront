import { Urbanist } from "next/font/google";

import ToastProvider from "@/providers/toast.provider";
import ModalProvider from "@/providers/model-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Store - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
