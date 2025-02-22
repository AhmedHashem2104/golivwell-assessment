import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Banknote } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { useTranslations } from "next-intl"

interface PaymentSuccessModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function PaymentSuccessModal({ isOpen, onClose }: PaymentSuccessModalProps) {
    const t = useTranslations("paymentSuccess")

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-3xl bg-[#FFFFFF] items-center">
                <DialogTitle asChild>
                    <VisuallyHidden>{t("title")}</VisuallyHidden>
                </DialogTitle>
                <div className="flex flex-col p-4">
                    <div className="w-24 h-24 rounded-full bg-green-400 flex items-center justify-center mb-8">
                        <Banknote className="w-12 h-12 text-white" />
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-[#27272E]">{t("title")}</h2>

                    <p className="text-gray-500 mb-8">{t("message")}</p>

                    <Button
                        onClick={onClose}
                        className="bg-coffee hover:bg-coffee-dark text-black font-semibold px-12 py-6 text-lg w-fit rounded-xl"
                    >
                        {t("close")}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
