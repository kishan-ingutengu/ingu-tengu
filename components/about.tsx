import Image from "next/image"
import Link from "next/link"

export function About() {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="section-title">About Us</div>
        <h2 className="section-heading">Welcome to Vasudev Tiffin Box</h2>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
          <div className="md:w-1/2">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-02%20at%209.13.03%E2%80%AFPM-uz0NMz5vtFynT8Epj7YjIkaDiGejfW.png"
                alt="Vasudev Tiffin Box Food"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <p className="text-gray-700 mb-6">
              At Vasudev Tiffin Box, we are passionate about providing a taste of home to individuals living in
              Bengaluru. Our journey began with a simple vision: to offer wholesome, home-made food that not only
              satisfies hunger but also brings comfort and joy. With our team of experienced chefs and a commitment to
              using fresh, high- quality ingredients, we strive to create flavorful meals that remind you of the warmth
              and love found in homemade cooking.
            </p>
            <p className="text-gray-700 mb-6">
              We understand the challenges of being away from home, and our mission is to bridge that gap by delivering
              delicious, nutritious meals right to your doorstep. With Vasudev Tiffin Box, you can trust that every bite
              is a testament to our dedication to exceptional taste and uncompromising quality. Join us in experiencing
              the pleasure of home-made food, wherever you are.
            </p>
            <p className="text-gray-700 font-medium mb-8">
              We deliver within 5 KMs radius of Tin Factory! However, in case of bulk orders, we can extend our delivery
              radius. Please place the order at least one day in advanced.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary">3000+</span>
                <span className="text-secondary font-medium">ORDERS SERVED</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary">300+</span>
                <span className="text-secondary font-medium">SATISFIED CUSTOMERS</span>
              </div>
            </div>

            <Link
              href="/#menu"
              className="bg-primary hover:bg-primary/90 text-secondary font-bold px-6 py-3 rounded-md inline-block transition-colors"
            >
              EXPLORE THE MENU
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

