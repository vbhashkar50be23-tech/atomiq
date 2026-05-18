import type { Metadata } from "next";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "ATOMIQ",
  description: "AI Organizational Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}