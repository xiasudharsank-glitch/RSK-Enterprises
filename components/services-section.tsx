"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { FileText, CreditCard, Receipt, Printer } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Government Certificates",
    icon: FileText,
    details: [
      "Aadhaar-PAN Link | ₹ 0.00",
      "Birth Certificate | ₹ 0.00",
      "Death Certificate | ₹ 0.00",
      "Marriage Certificate | ₹ 0.00",
      "Unmarried Certificate | ₹ 0.00",
      "Community Certificate | ₹ 0.00",
      "Nativity Certificate | ₹ 0.00",
      "OBC Certificate | ₹ 0.00",
      "Legal Heir Certificate | ₹ 0.00",
    ],
  },
  {
    id: 2,
    title: "ID & Card Services",
    icon: CreditCard,
    details: [
      "Aadhaar Services (New, Update, Correction)",
      "PAN Card Services (New, Reprint)",
      "Ration Card Services",
      "Voter ID Services",
      "Driving License",
      "Passport Services",
    ],
  },
  {
    id: 3,
    title: "Bill Payments",
    icon: Receipt,
    details: [
      "Electricity Bill Payment",
      "WaterTax & Bill Payment",
      "Gas Bill Payment",
      "Property Tax",
      "Mobile Recharge",
      "DTH Recharge",
      "Insurance Payments",
    ],
  },
  {
    id: 4,
    title: "Printing & Stationery",
    icon: Printer,
    details: [
      "TNPL A4 Paper 70 GSM | ₹ 250.00 (MRP: ₹332)",
      "Scanning & Lamination",
      "Document Printing",
      "Color Printing",
      "Photocopying",
      "Binding Services",
      "Custom Stationery",
    ],
  },
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Can We Help You With Today?
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedService(service.id)}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  View Details →
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 animate-fade-in">
            {(() => {
              const service = services.find((s) => s.id === selectedService)
              const Icon = service?.icon
              return (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      {Icon && <Icon className="text-primary" size={28} />}
                      <h3 className="text-2xl font-bold text-foreground">{service?.title}</h3>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {service?.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      )}
    </section>
  )
}
