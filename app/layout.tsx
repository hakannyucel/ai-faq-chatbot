import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI FAQ Chatbot",
  description: "An AI-powered chatbot to answer frequently asked questions",
  keywords: ["AI", "chatbot", "FAQ", "Deepseek", "Next.js", "React"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name or Company",
  publisher: "Your Name or Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
