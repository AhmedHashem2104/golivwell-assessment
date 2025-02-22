import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

export default function ProductDetail() {
    const locale = useLocale();
    const t = useTranslations("productDetail");

    return (
        <section className="container mx-auto px-4 py-16 flex items-center justify-center">
            <div className="bg-cream rounded-[32px] p-8 max-w-3xl w-full">
                <h1 className="text-4xl font-bold mb-8 text-[#603809] border-b-4 border-b-[#2B050B] border-coffee/20 pb-4 w-fit">
                    {t("title")}
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="space-y-2 text-[#1E1E1E] mt-5">
                            <p className="font-medium">{t("ingredients.blackTea")}</p>
                            <p className="font-medium">{t("ingredients.milk")}</p>
                            <p className="font-medium">{t("ingredients.sweetener")}</p>
                            <div>
                                <p className="font-medium mb-2">{t("ingredients.spicesTitle")}</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>{t("ingredients.spices.cinnamon")}</li>
                                    <li>{t("ingredients.spices.cardamom")}</li>
                                    <li>{t("ingredients.spices.ginger")}</li>
                                    <li>{t("ingredients.spices.cloves")}</li>
                                    <li>{t("ingredients.spices.blackPepper")}</li>
                                    <li>{t("ingredients.spices.starAnise")}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-[#603809] font-medium">{t("priceLabel")}</span>
                                <span className="text-2xl font-bold text-[#603809]">{t("priceValue")}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[300px] md:h-auto rounded-2xl overflow-hidden">
                        <Image
                            src="/product.png"
                            alt={t("title")}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="flex justify-center items-start mt-5">
                    <Link href={`/${locale}/payment`} className="w-1/2">
                        <Button className="w-full bg-coffee hover:bg-coffee-dark text-[#603809] font-semibold py-6 text-lg rounded-xl mt-5 mx-auto">
                            {t("checkout")}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
