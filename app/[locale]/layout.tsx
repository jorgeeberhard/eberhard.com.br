import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Noto_Sans_Mono } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/app/ui/navbar";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Locales } from "@/app/lib/definitions";
import LocaleSwitchSelector from "../ui/LocaleSwitchSelector";

const notoSansMono = Noto_Sans_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jorge Eberhard",
  description: "Jorge Eberhard Full-Stack Developer Portfolio",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locales)) {
    notFound();
  }

  const message = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${notoSansMono.className} antialiased flex flex-col justify-center`}
      >
        <NextIntlClientProvider messages={message}>
          <div className="flex justify-center">
            <LocaleSwitchSelector />
            <NavBar />
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
