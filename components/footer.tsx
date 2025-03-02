import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-primary text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/#about" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/#subscribe" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span>Subscribe Your Meal</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Near Tin Factory, Bengaluru - 560016</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+918310704696" className="hover:text-primary transition-colors">
                  +918310704696
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:vasudevtiffinbox@gmail.com" className="hover:text-primary transition-colors">
                  vasudevtiffinbox@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-white/10 hover:bg-primary text-white hover:text-secondary p-2 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary text-white hover:text-secondary p-2 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-primary text-xl font-bold mb-6">Opening</h3>
            <ul className="space-y-2">
              <li>Monday: 9 AM - 9 PM</li>
              <li>Tuesday: 9 AM - 9 PM</li>
              <li>Wednesday: 9 AM - 9 PM</li>
              <li>Thursday: 9 AM - 9 PM</li>
              <li>Friday: 9 AM - 9 PM</li>
              <li>Saturday: Closed</li>
              <li>Sunday: 9 AM - 9 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p>2023 - 2025 © All Right Reserved.</p>
          <p className="mt-2">Vasudev Tiffin Box</p>
        </div>
      </div>
    </footer>
  )
}

