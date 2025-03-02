import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-24 bg-secondary min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Khaao Pet <br /> Bhar Ke
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-xl">
            Delicious North Indian home-made meals delivered to your doorstep. Say goodbye to the hassle of cooking or
            settling for mediocre food options. Taste the joy of home with Vasudev Tiffin Box.
          </p>
          <div className="bg-primary/90 text-secondary font-semibold px-4 py-2 rounded-md inline-block mb-8">
            We deliver within 5 KMs radius of Tin Factory!
          </div>
          <div>
            <Link
              href="/#menu"
              className="bg-primary hover:bg-primary/90 text-secondary font-bold px-8 py-4 rounded-md inline-block transition-colors"
            >
              EXPLORE OUR MENU
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-02%20at%209.12.33%E2%80%AFPM.png-0HWaLMoebWB7rKHlDUk7riFyNyEuqG.jpeg"
              alt="Vasudev Tiffin Box Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

