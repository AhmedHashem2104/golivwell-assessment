import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/navbar";

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Ensure the locale is valid
    if (!routing.locales.includes(locale as "en" | "ar")) {
        notFound();
    }

    // Fetch messages for the current locale
    const messages = await getMessages();

    return (
        <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <Navbar />
                {children}
            </NextIntlClientProvider>
        </div>
    );
}
