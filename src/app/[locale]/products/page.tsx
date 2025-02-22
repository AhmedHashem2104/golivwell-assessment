import Image from "next/image";

export default function Products() {
    return (
        <section className="min-h-screen py-16 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed flex items-center">
            <div className="w-1/2 flex justify-center items-center mx-auto">
                <Image
                    src="/products.png"
                    className="w-full"
                    alt="Chai Latte"
                    width={500}
                    height={500}
                />
            </div>
        </section>
    );
}
