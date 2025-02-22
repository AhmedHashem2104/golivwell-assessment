import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/layout/navbar';

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string } | Promise<{ locale: string }>;
}) {
    const resolvedParams = await params; // Await in case it's a Promise

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(resolvedParams.locale as "en" | "ar")) {
        notFound();
    }

    // Providing all messages to the client
    const messages = await getMessages();

    return (
        <div lang={resolvedParams.locale} dir={resolvedParams.locale === "ar" ? "rtl" : "ltr"}>
            <NextIntlClientProvider locale={resolvedParams.locale} messages={messages}>
                <Navbar />
                {children}
            </NextIntlClientProvider>
        </div>
    );
}
