"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Abhishek Mohapatra",
    review:
      "Taste wise awesome, cant complaint. Again a great experience, uncle is always on time, I receive it warm. again no complaints",
    rating: 5,
    ordered: "Ordered Dinner",
  },
  {
    name: "Kalyan",
    review: "It was amazing!! Couldn't expect that in such a lower price.",
    rating: 5,
    ordered: "Ordered Breakfast",
  },
  {
    name: "Ravi Kumar",
    review: "It was really lip smacking. The quantity was good and quality was awesome.",
    rating: 5,
    ordered: "Ordered Regular Lunch",
  },
  {
    name: "Priya Singh",
    review: "The food reminds me of home. Perfectly spiced and always delivered hot.",
    rating: 5,
    ordered: "Ordered Weekly Subscription",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="reviews">
      <div className="container mx-auto px-4">
        <div className="section-title">Testimonial</div>
        <h2 className="section-heading">Our Customers Say!!!</h2>

        <div className="mt-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length
              return (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-md ${offset === 1 ? "md:bg-primary" : ""}`}>
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className={`mb-4 ${offset === 1 ? "md:text-secondary" : "text-gray-700"}`}>
                    {testimonials[index].review}
                  </p>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${offset === 1 ? "md:text-secondary" : "text-primary"}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <h4 className={`text-lg font-bold ${offset === 1 ? "md:text-secondary" : "text-secondary"}`}>
                    {testimonials[index].name}
                  </h4>
                  <p className={`text-sm ${offset === 1 ? "md:text-secondary/80" : "text-gray-500"}`}>
                    {testimonials[index].ordered}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <button
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-secondary hover:bg-primary transition-colors"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-secondary hover:bg-primary transition-colors"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=vasudev+tiffin+box+bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-secondary font-bold px-6 py-3 rounded-md inline-block transition-colors"
          >
            MORE REVIEWS ON GOOGLE
          </a>
        </div>
      </div>
    </section>
  )
}

