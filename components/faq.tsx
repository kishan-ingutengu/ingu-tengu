"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Do I have to pay any delivery charges?",
    answer:
      "Yes, all the rates mentioned in the menu are exclusive of delivery charges. However, the delivery is free for 1 KM radius of Vasudev Tiffin Box. For distances around 1-2 KMs, the delivery charge is ₹10/- per order. For distances more than 2 KMs and less than 3 KMs, the delivery charge is ₹20/- per order. For distances more than 3 KMs and less than 5 KMs, the delivery charge is ₹30/- per order. The delivery distance is calculated from here. Here are a few calculations: 600 metres: Free Delivery, 1.5 KMs: ₹10/- per order, 3 KMs: ₹20/- per order, 5 KMs: ₹30/- per order. For more than one order from the same location, we add delivery charge on only one order.",
  },
  {
    question: "When will my meals be delivered?",
    answer:
      "Breakfast is delivered between 8:00 AM and 9:00 AM. Lunch is delivered between 12:00 PM and 1:00 PM. Dinner is delivered between 7:00 PM and 8:00 PM. We strive to deliver your meals on time, but please allow for a 15-minute buffer due to traffic conditions.",
  },
  {
    question: "How do I pay for the subscription plan?",
    answer:
      "We accept payments through various methods including UPI (Google Pay, PhonePe, Paytm), bank transfer, and cash. For subscription plans, we recommend making the payment at the beginning of your subscription period.",
  },
  {
    question: "Can I place a trial order for tasting the food before starting my subscription plan?",
    answer:
      "Yes, absolutely! We encourage you to try our food before committing to a subscription plan. You can place a single meal order to experience our quality and taste. If you enjoy it, you can then opt for a subscription plan.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-16 md:py-24 bg-white" id="faqs">
      <div className="container mx-auto px-4">
        <div className="section-title">Frequently Asked Questions</div>
        <h2 className="section-heading">We have your answers</h2>

        <div className="mt-16 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-primary">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>

              {openIndex === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

