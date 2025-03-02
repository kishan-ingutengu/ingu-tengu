"use client"

import { useState } from "react"
import Image from "next/image"
import { Coffee, Utensils, UtensilsCrossed, Package } from "lucide-react"

const menuCategories = [
  { id: "breakfast", label: "Breakfast", icon: <Coffee className="w-5 h-5" /> },
  { id: "lunch", label: "Lunch", icon: <Utensils className="w-5 h-5" /> },
  { id: "dinner", label: "Dinner", icon: <UtensilsCrossed className="w-5 h-5" /> },
  { id: "extras", label: "Extras", icon: <Package className="w-5 h-5" /> },
]

const menuItems = {
  breakfast: [
    {
      day: "Monday",
      items: ["Vegetable Poha"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Tuesday",
      items: ["Dhokla (6 pcs)", "Green Chutney"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Wednesday",
      items: ["Appe (8 pcs)", "Green Chutney"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Thursday",
      items: ["Triple-Layered Veg Sandwich", "Chutney"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Friday",
      items: ["Stuffed Aloo Paratha (2 pcs)", "Chutney"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Sunday",
      items: ["Plain Puri (6 pcs)", "Aloo Tamatar Sabji / Aloo Chana Sabji", "Surprise Sweet Dish"],
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  lunch: [
    {
      day: "Monday",
      items: ["Rice", "Dal", "Seasonal Vegetable", "Salad", "Papad"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Tuesday",
      items: ["Rice", "Rajma", "Seasonal Vegetable", "Salad", "Papad"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Wednesday",
      items: ["Rice", "Kadhi", "Seasonal Vegetable", "Salad", "Papad"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Thursday",
      items: ["Rice", "Chole", "Seasonal Vegetable", "Salad", "Papad"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Friday",
      items: ["Rice", "Dal", "Seasonal Vegetable", "Salad", "Papad"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Sunday",
      items: ["Pulao", "Raita", "Seasonal Vegetable", "Salad", "Papad"],
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  dinner: [
    {
      day: "Monday",
      items: ["Roti (3 pcs)", "Dal", "Seasonal Vegetable", "Rice", "Salad"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Tuesday",
      items: ["Roti (3 pcs)", "Rajma", "Seasonal Vegetable", "Rice", "Salad"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Wednesday",
      items: ["Roti (3 pcs)", "Kadhi", "Seasonal Vegetable", "Rice", "Salad"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Thursday",
      items: ["Roti (3 pcs)", "Chole", "Seasonal Vegetable", "Rice", "Salad"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Friday",
      items: ["Roti (3 pcs)", "Dal", "Seasonal Vegetable", "Rice", "Salad"],
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      day: "Sunday",
      items: ["Roti (3 pcs)", "Special Curry", "Seasonal Vegetable", "Rice", "Salad"],
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  extras: [
    {
      name: "Roti",
      price: "₹10/piece",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Rice",
      price: "₹30/portion",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Dal",
      price: "₹40/portion",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Vegetable",
      price: "₹50/portion",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("breakfast")

  return (
    <section className="py-16 md:py-24" id="menu">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Most Popular Items</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-secondary"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {activeCategory === "breakfast" && (
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary">
                Breakfast available at just <span className="text-primary">₹79/- per day</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuItems.breakfast.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.day}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary mb-2">{item.day}</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {item.items.map((menuItem, idx) => (
                        <li key={idx}>{menuItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === "lunch" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.lunch.map((item, index) => (
              <div key={index} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.day}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">{item.day}</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {item.items.map((menuItem, idx) => (
                      <li key={idx}>{menuItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCategory === "dinner" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.dinner.map((item, index) => (
              <div key={index} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.day}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">{item.day}</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {item.items.map((menuItem, idx) => (
                      <li key={idx}>{menuItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCategory === "extras" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {menuItems.extras.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h4 className="text-lg font-bold text-secondary">{item.name}</h4>
                <p className="text-primary font-medium">{item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

