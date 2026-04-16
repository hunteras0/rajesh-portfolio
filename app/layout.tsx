import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rajesh Portfolio",
  description: "Futuristic portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
  <meta name="google-site-verification" content="nRFhsVCkAWlS28JJ1IEjIG3N-vt5T_JiGbesgcA" />
</head>
      <body>{children}</body>
    </html>
  );
}