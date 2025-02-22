import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Banknote } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"


interface PaymentSuccessModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function PaymentSuccessModal({ isOpen, onClose }: PaymentSuccessModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-3xl bg-[#FFFFFF] items-center">
                <DialogTitle asChild>
                    <VisuallyHidden>Payment Successful</VisuallyHidden>
                </DialogTitle>
                <div className="flex flex-col p-4">
                    <div className="w-24 h-24 rounded-full bg-green-400 flex items-center justify-center mb-8">
                        <Banknote className="w-12 h-12 text-white" />
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-[#27272E]">Payment Successful</h2>

                    <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <Button
                        onClick={onClose}
                        className="bg-coffee hover:bg-coffee-dark text-black font-semibold px-12 py-6 text-lg w-fit rounded-xl"
                    >
                        Close
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

