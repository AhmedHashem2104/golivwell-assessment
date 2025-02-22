"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

export default function Menu() {
    const t = useTranslations("menu")
    const tc = useTranslations("coffeeMenu")
    const locale = useLocale();


    const coffeeMenu = [
        {
            name: tc("cappuccino"),
            image: "/coffee.png",
            ratio: tc("ratio", { coffee: 50, milk: 50 }),
            price: "$8.50",
        },
        {
            name: tc("chaiLatte"),
            image: "/latte.png",
            ratio: tc("ratio", { coffee: 50, milk: 50 }),
            price: "$8.50",
        },
        {
            name: tc("macchiato"),
            image: "/coffee.png",
            ratio: tc("ratio", { coffee: 50, milk: 50 }),
            price: "$8.50",
        },
        {
            name: tc("espresso"),
            image: "/latte.png",
            ratio: tc("ratio", { coffee: 50, milk: 50 }),
            price: "$8.50",
        },
        {
            name: tc("cappuccino"),
            image: "/coffee.png",
            ratio: tc("ratio", { coffee: 50, milk: 50 }),
            price: "$8.50",
        },
        {
            name: tc("chaiLatte"),
            image: "/latte.png",
            ratio: tc("ratio", { coffee: 50, milk: 50 }),
            price: "$8.50",
        },
        {
            name: tc("macchiato"),
            image: "/coffee.png",
            ratio: tc("ratio", { coffee: 50, milk: 50 }),
            price: "$8.50",
        },
        {
            name: tc("espresso"),
            image: "/latte.png",
            ratio: tc("ratio", { coffee: 50, milk: 50 }),
            price: "$8.50",
        },
    ]

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-coffee">{t("title")}</h1>
                <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto">{t("subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coffeeMenu.map((coffee, index) => (
                    <div key={index} className="bg-cream rounded-3xl text-black overflow-hidden">
                        <div className="relative h-64 mb-4 rounded-3xl overflow-hidden">
                            <Image src={coffee.image || "/placeholder.svg"} alt={coffee.name} fill className="object-cover" />
                        </div>
                        <div className="text-center p-4">
                            <h3 className="text-2xl font-bold mb-2 text-coffee-dark">{coffee.name}</h3>
                            <p className="text-sm mb-2 text-gray-600">{coffee.ratio}</p>
                            <p className="text-xl font-bold mb-4 text-coffee-dark">{coffee.price}</p>
                            <Link href={`/${locale}/products/[slug]`} as={`/${locale}/products/${coffee.name}`} passHref>
                                <Button className="w-1/2 bg-[#bdada6] hover:bg-[#a39590] text-black font-semibold transition-colors rounded-full">
                                    {t("orderNow")}
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

