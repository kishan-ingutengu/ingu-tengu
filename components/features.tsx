import { Utensils, ShoppingCart, Clock } from "lucide-react"

const features = [
  {
    icon: <Utensils className="w-12 h-12 text-primary" />,
    title: "Quality Home-Made Food",
    description:
      "Experience the epitome of quality home-made food with Vasudev Tiffin Box. Every dish crafted with love and care, delivered to your doorstep.",
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-primary" />,
    title: "Online Order",
    description:
      "Ordering food online has never been easier! With Vasudev Tiffin Box, a few clicks is all it takes to have delicious meals delivered to your doorstep.",
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "On-time Delivery",
    description:
      "You can rely on us for reliable and timely delivery, allowing you to enjoy your fresh and flavorful home-made food without any delays.",
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

