import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LuxeScent",
  description: "Generated LuxeScent Company Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
