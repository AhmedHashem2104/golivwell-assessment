"use client";
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function DidYouKnow() {
    const t = useTranslations("didYouKnow")

    return (
        <section className="min-h-screen py-16 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed flex items-center">
            <div className="max-w-4xl mx-auto">
                <div className="backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-[#000000CC] border-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-coffee">{t("title")}</h1>

                    <div className="space-y-6 text-lg leading-relaxed text-white">
                        {t.raw("content").map((paragraph: string, index: number) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-6 mt-12">
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Image src="/facebook.png?height=40&width=40" alt="Facebook" width={40} height={40} className="w-10 h-10" />
                    </Link>
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Image
                            src="/instagram.png?height=40&width=40"
                            alt="Instagram"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                    </Link>
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Image src="/youtube.png?height=40&width=40" alt="YouTube" width={40} height={40} className="w-10 h-10" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

