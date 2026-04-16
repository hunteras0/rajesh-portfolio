import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rajesh Portfolio",
  description: "Futuristic portfolio",
};
export const metadata = {
  verification: {
    google: "nRFhsVCkAWlS28JJ1IEjIG3N-vt5T_JiGbesgcA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}