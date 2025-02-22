"use client";
import Image from "next/image"
import Link from "next/link"
import { Globe, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from "next/navigation"


const Navbar = () => {
    const t = useTranslations("nav")
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const links = [
        {
            href: "/",
            text: t("home"),
        },
        {
            href: "/menu",
            text: t("menu"),
        },
        {
            href: "/products",
            text: t("products"),
        },
        {
            href: "/did-you-know",
            text: t("didYouKnow"),
        },
    ]

    const handleLanguageChange = (newLocale: string) => {
        router.push(pathname.replace(`/${locale}`, `/${newLocale}`))
    }

    return (
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Coffee Logo"
                        width={50}
                        height={50}
                        className="w-12 h-12"
                    />
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    {
                        links.map((link) => (
                            <Link
                                key={link.href}
                                href={`/${locale}${link.href}`}
                                className={`hover:text-coffee transition-colors ${pathname === `/${locale}${link.href}` ? "text-coffee" : ""
                                    }`}
                            >
                                {link.text}
                            </Link>
                        ))
                    }

                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="hover:text-coffee">
                    <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-coffee">
                    <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-coffee" onClick={() => handleLanguageChange(locale === "en" ? "ar" : "en")}>
                    <Globe className="h-5 w-5" />
                </Button>
            </div>
        </nav>
    )
}

export default Navbar