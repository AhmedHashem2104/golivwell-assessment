
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center" >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">FRESH COFFEE IN THE MORNING</h1>
          <p className="text-lg md:text-xl mb-8 text-cream/90">
            {"Coffee is more than a drink; it's a moment of peace, a spark of inspiration, and fuel for the soul."}{" "}
            ☕✨
          </p>
          <Button className="bg-coffee hover:bg-coffee-dark text-black font-semibold px-8 py-6 text-lg rounded-xl transition-colors">
            Click to order
          </Button>
        </div>
      </div>
    </section>
  )
}

