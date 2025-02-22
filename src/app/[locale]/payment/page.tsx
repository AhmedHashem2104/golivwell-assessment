"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import PaymentSuccessModal from "@/components/payment-success-modal"
import { redirect } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"

export default function Payment() {
    const t = useTranslations("payment")
    const [showSuccess, setShowSuccess] = useState(false)
    const locale = useLocale()

    const handlePayment = () => {
        setShowSuccess(true)
    }

    const paymentMethods = [
        {
            type: t("type.mastercard"),
            number: "5432",
            expDate: "12/20",
            bank: t("bank"),
            bgColor: "bg-[#1a1f36]",
            logo: "/mastercard.png?height=40&width=40",
        },
        {
            type: t("type.visa"),
            number: "4291",
            expDate: "12/20",
            bank: t("bank"),
            bgColor: "bg-[#4169e1]",
            logo: "/visa.png?height=40&width=40",
        },
    ]

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="w-1/2 p-6 rounded-xl mx-auto bg-[#FFFFFF]">
                <h1 className="text-4xl font-bold mb-12 text-black">{t("title")}</h1>

                <div className="space-y-6">
                    {paymentMethods.map((method, index) => (
                        <div key={index} className="border rounded-2xl p-6 flex items-center gap-8 w-3/4 mx-auto">
                            <div className={`${method.bgColor} text-white p-4 rounded-xl w-64 h-40 relative`}>
                                <div className="absolute top-4 left-4">
                                    <div className="text-sm opacity-80">{method.bank}</div>
                                    <div className="mt-1">
                                        <div className="w-12 h-8 bg-white/20 rounded-md" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg">{method.number}</div>
                                        <Image
                                            src={method.logo || "/placeholder.svg"}
                                            alt={method.type}
                                            width={40}
                                            height={40}
                                            className="w-10 h-10"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-semibold text-[#27272E]">
                                        {method.type}: {method.number}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-2 text-[#27272E]">
                                    <span>{t("expDate")}</span>
                                    <span className="font-medium text-[#27272E]">{method.expDate}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 justify-center flex">
                    <Button
                        onClick={handlePayment}
                        className="w-1/2 bg-coffee hover:bg-coffee-dark text-black font-semibold py-6 text-xl rounded-xl"
                    >
                        {t("pay")}
                    </Button>
                </div>
            </div>
            <PaymentSuccessModal
                isOpen={showSuccess}
                onClose={() => {
                    redirect(`/${locale}/products`)
                }}
            />
        </section>
    )
}

