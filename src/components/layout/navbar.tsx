'use client'
import { usePathname } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import { Globe, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"


const Navbar = () => {
    const pathname = usePathname()
    const links = [
        {
            href: "/",
            text: "Home",
        },
        {
            href: "/menu",
            text: "Menu",
        },
        {
            href: "/products",
            text: "Products",
        },
        {
            href: "/did-you-know",
            text: "Did you know?",
        },
    ]
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
                            <Link key={link.href} href={link.href} className={`hover:text-coffee transition-colors ${pathname === link.href ? 'text-coffee' : ''}`}>
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
                <Button variant="ghost" size="icon" className="hover:text-coffee">
                    <Globe className="h-5 w-5" />
                </Button>
            </div>
        </nav>
    )
}

export default Navbar