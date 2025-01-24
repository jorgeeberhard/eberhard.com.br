import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const notoSansMono = Noto_Sans_Mono({ weight: "400" });

export const metadata: Metadata = {
  title: "Jorge Eberhard",
  description: "Jorge Eberhard Full-Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansMono.className} antialiased flex flex-cols`}>
        {children}
      </body>
    </html>
  );
}
