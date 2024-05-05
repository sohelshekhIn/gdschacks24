import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/utils/AuthContext";

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
    <html lang="en" className="light">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
