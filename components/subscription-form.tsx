"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const mealChoices = ["Breakfast", "Lunch", "Dinner"]
const mealSizes = ["Mini", "Regular", "Large"]
const subscriptionPlans = ["Daily", "Weekly (7 Meals)", "Monthly (30 Meals)"]

export function SubscriptionForm() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    mealChoice: "Breakfast",
    mealSize: "Mini",
    subscriptionPlan: "Weekly (7 Meals)",
    address: "",
    specialRequest: "",
  })

  const [price, setPrice] = useState("₹549")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Calculate price based on selections
    if (name === "mealChoice" || name === "mealSize" || name === "subscriptionPlan") {
      calculatePrice()
    }
  }

  const calculatePrice = () => {
    // This is a simplified price calculation
    // In a real app, you would have more complex logic
    let basePrice = 0

    if (formData.mealChoice === "Breakfast") basePrice = 79
    else if (formData.mealChoice === "Lunch") basePrice = 99
    else if (formData.mealChoice === "Dinner") basePrice = 99

    if (formData.mealSize === "Mini") basePrice = basePrice
    else if (formData.mealSize === "Regular") basePrice = basePrice * 1.2
    else if (formData.mealSize === "Large") basePrice = basePrice * 1.5

    let multiplier = 1
    if (formData.subscriptionPlan === "Daily") multiplier = 1
    else if (formData.subscriptionPlan === "Weekly (7 Meals)") multiplier = 7
    else if (formData.subscriptionPlan === "Monthly (30 Meals)") multiplier = 30

    const totalPrice = Math.round(basePrice * multiplier)
    setPrice(`₹${totalPrice}`)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Thank you for subscribing! We will contact you shortly.")
  }

  return (
    <section className="py-16 md:py-24 bg-secondary" id="subscribe">
      <div className="container mx-auto px-4">
        <div className="text-primary section-title">Contact Us</div>
        <h2 className="text-white section-heading">Subscribe Your Meal</h2>

        <div className="mt-16 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-md border-0"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Your WhatsApp Number"
                  className="w-full p-4 rounded-md border-0"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <select
                  name="mealChoice"
                  value={formData.mealChoice}
                  onChange={handleChange}
                  className="w-full p-4 rounded-md border-0 appearance-none"
                  required
                >
                  {mealChoices.map((choice) => (
                    <option key={choice} value={choice}>
                      {choice}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  name="mealSize"
                  value={formData.mealSize}
                  onChange={handleChange}
                  className="w-full p-4 rounded-md border-0 appearance-none"
                  required
                >
                  {mealSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  name="subscriptionPlan"
                  value={formData.subscriptionPlan}
                  onChange={handleChange}
                  className="w-full p-4 rounded-md border-0 appearance-none"
                  required
                >
                  {subscriptionPlans.map((plan) => (
                    <option key={plan} value={plan}>
                      {plan}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
              </div>

              <div className="bg-white p-4 rounded-md flex items-center justify-center">
                <span className="font-bold text-xl text-secondary">{price}</span>
              </div>
            </div>

            <div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Address (Google Maps Link Preferred)"
                className="w-full p-4 rounded-md border-0"
                required
              />
            </div>

            <div>
              <textarea
                name="specialRequest"
                value={formData.specialRequest}
                onChange={handleChange}
                placeholder="Special Request"
                className="w-full p-4 rounded-md border-0 h-32 resize-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-secondary font-bold py-4 rounded-md transition-colors"
              >
                SUBSCRIBE NOW
              </button>
            </div>
          </form>

          <div className="mt-8 text-white">
            <p className="font-medium mb-4">Note:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                We deliver within 5 KMs radius of Tin Factory! However, in case of bulk orders, we can extend our
                delivery radius.
              </li>
              <li>
                Rates are exclusive of delivery charges. Please refer to{" "}
                <a href="#faqs" className="text-primary hover:underline">
                  this section
                </a>{" "}
                for the applicable delivery charges.
              </li>
              <li>Call or WhatsApp us on +918310704696 for any customization in the meal plan.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

