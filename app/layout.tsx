import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/ui/navbar";

const notoSansMono = Noto_Sans_Mono({ weight: "400", subsets: ["latin"] });

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
      <body
        className={`${notoSansMono.className} antialiased flex flex-col justify-center`}
      >
        <div className="flex justify-center">
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
