"use client";
import { Button } from "@/components/ui/button"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link";

export default function Home() {
    const t = useTranslations("home")
    const locale = useLocale()

    return (
        <section className="relative min-h-[calc(100vh-80px)] bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{t("title")}</h1>
                    <p className="text-lg md:text-xl mb-8 text-cream/90">{t("description")} ☕✨</p>
                    <Link href={`/${locale}/menu`}>
                        <Button className="bg-coffee hover:bg-coffee-dark text-black font-semibold px-8 py-6 text-lg rounded-xl transition-colors">
                            {t("cta")}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

