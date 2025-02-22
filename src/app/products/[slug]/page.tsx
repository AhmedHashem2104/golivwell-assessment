import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductDetail() {
    return (

        <section className="container mx-auto px-4 py-16 flex items-center justify-center">
            <div className="bg-cream rounded-[32px] p-8 max-w-3xl w-full">
                <h1 className="text-4xl font-bold mb-8 text-[#603809] border-b-4 border-b-[#2B050B] border-coffee/20 pb-4 w-fit">Chai Latte</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="space-y-2 text-[#1E1E1E] mt-5">
                            <p className="font-medium">Black tea (commonly Assam or Darjeeling)</p>
                            <p className="font-medium">Milk (dairy or plant-based)</p>
                            <p className="font-medium">Sweetener (sugar, honey, or syrup)</p>
                            <div>
                                <p className="font-medium mb-2">Spices, typically including:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Cinnamon</li>
                                    <li>Cardamom</li>
                                    <li>Ginger</li>
                                    <li>Cloves</li>
                                    <li>Black pepper</li>
                                    <li>Star anise (optional)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-[#603809] font-medium">Price:</span>
                                <span className="text-2xl font-bold text-[#603809]">$8.50</span>
                            </div>


                        </div>
                    </div>

                    <div className="relative h-[300px] md:h-auto rounded-2xl overflow-hidden">
                        <Image
                            src="/product.png"
                            alt="Chai Latte"
                            fill
                            className="object-cover"
                        />
                    </div>


                </div>
                <div className="flex justify-center items-start mt-5">
                    <Link href="/payment" className="w-1/2">
                        <Button className="w-full bg-coffee hover:bg-coffee-dark text-[#603809] font-semibold py-6 text-lg rounded-xl mt-5 mx-auto">
                            Check out
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

