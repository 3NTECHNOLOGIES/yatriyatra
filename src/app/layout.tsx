import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yatri Yatra",
  description: `At Yatri Yatra, we understand that travel is more than just a journey; it's an experience filled with excitement, exploration, and cherished moments. Our mission is to make every traveler's dream a reality by offering reliable and affordable travel services.

We specialize in providing a wide range of travel solutions, including bus and train ticket bookings, flight reservations, hotel accommodations, and customized holiday packages. Whether you're planning a quick weekend getaway, a family vacation, or a corporate trip, Yatri Yatra ensures that every detail is taken care of so you can focus on enjoying the experience.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
