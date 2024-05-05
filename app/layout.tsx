import Navbar from "@/components/Navbar";
import PrelineScript from "@/components/PrelineScript";
import { AuthProvider } from "@/utils/AuthContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NiceQuestion? | GDSC Hacks 2024 | Home",
  description:
    "NiceQuestion? is a platform for learning efficiently using A.I.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
