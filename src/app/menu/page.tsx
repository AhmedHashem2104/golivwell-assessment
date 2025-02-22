import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const coffeeMenu = [
    {
        name: "Cappuccino",
        image:
            "/coffee.png",
        ratio: "Coffee 50% | Milk 50%",
        price: "$8.50",
    },
    {
        name: "Chai Latte",
        image:
            "/latte.png",
        ratio: "Coffee 50% | Milk 50%",
        price: "$8.50",
    },
    {
        name: "Macchiato",
        image:
            "/coffee.png",
        ratio: "Coffee 50% | Milk 50%",
        price: "$8.50",
    },
    {
        name: "Expresso",
        image:
            "/latte.png",
        ratio: "Coffee 50% | Milk 50%",
        price: "$8.50",
    },
    {
        name: "Cappuccino",
        image:
            "/coffee.png",
        ratio: "Coffee 50% | Milk 50%",
        price: "$8.50",
    },
    {
        name: "Chai Latte",
        image:
            "/latte.png",
        ratio: "Coffee 50% | Milk 50%",
        price: "$8.50",
    },
    {
        name: "Macchiato",
        image:
            "/coffee.png",
        ratio: "Coffee 50% | Milk 50%",
        price: "$8.50",
    },
    {
        name: "Expresso",
        image:
            "/latte.png",
        ratio: "Coffee 50% | Milk 50%",
        price: "$8.50",
    },

]

export default function Menu() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-coffee">Enjoy a new blend of coffee style</h1>
                <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto">
                    Explore all flavours of coffee with us. There is always a new cup worth experiencing
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coffeeMenu.map((coffee, index) => (
                    <div key={index} className="bg-cream rounded-3xl text-black overflow-hidden">
                        <div className="relative h-64 mb-4 rounded-3xl overflow-hidden">
                            <Image src={coffee.image} alt={coffee.name} fill className="object-cover" />
                        </div>
                        <div className="text-center p-4">
                            <h3 className="text-2xl font-bold mb-2 text-coffee-dark">{coffee.name}</h3>
                            <p className="text-sm mb-2 text-gray-600">{coffee.ratio}</p>
                            <p className="text-xl font-bold mb-4 text-coffee-dark">{coffee.price}</p>
                            <Link href="/products/[slug]" as={`/products/${coffee.name}`} passHref>
                                <Button className="w-1/2 bg-[#bdada6] hover:bg-[#a39590] text-black font-semibold transition-colors rounded-full">
                                    Order Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

