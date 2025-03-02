import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { About } from "@/components/about"
import { Menu } from "@/components/menu"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { SubscriptionForm } from "@/components/subscription-form"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Menu />
      <Testimonials />
      <FAQ />
      <SubscriptionForm />
    </>
  )
}

