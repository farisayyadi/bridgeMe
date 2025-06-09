import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BridgeMe - Empowering Connections, Inspiring Growth",
  description: "Connect with local service providers and discover amazing opportunities in your community. Join BridgeMe today and bridge the gap between services and success.",
  keywords: "services, local providers, community, connections, bridge, growth, opportunities",
  authors: [{ name: "BridgeMe Team" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app-container">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
