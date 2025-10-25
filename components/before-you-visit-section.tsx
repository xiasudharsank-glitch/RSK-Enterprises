"use client"

import { useState } from "react"
import { X } from "lucide-react"

const services = [
  {
    id: 1,
    icon: "🆔",
    title: "Aadhaar Card Update",
    documents: [
      "Current Aadhaar card",
      "Valid ID proof (Passport, Voter ID, Driving License)",
      "Address proof (Utility bill, Rental agreement, Bank statement)",
      "Recent passport-sized photograph (4x6 cm)",
      "Filled Aadhaar update form (available on-site)",
    ],
    processingTime: "15-20 minutes",
  },
  {
    id: 2,
    icon: "💳",
    title: "New PAN Card",
    documents: [
      "Valid ID proof (Passport, Voter ID, Driving License, Aadhaar)",
      "Address proof (Utility bill, Rental agreement, Bank statement)",
      "Date of birth proof (Birth certificate, School certificate)",
      "Recent passport-sized photograph (4x6 cm)",
      "Filled PAN application form (Form 49AA)",
      "Self-attested copies of all documents",
    ],
    processingTime: "7-10 business days",
  },
  {
    id: 3,
    icon: "📋",
    title: "Community/Nativity Certificate",
    documents: [
      "Valid ID proof (Voter ID, Aadhaar, Passport)",
      "Address proof (Utility bill, Rental agreement, Bank statement)",
      "Birth certificate or School leaving certificate",
      "Affidavit on stamp paper (₹10 or ₹20)",
      "Two passport-sized photographs",
      "Proof of community (if applicable)",
    ],
    processingTime: "Same day issuance",
  },
  {
    id: 4,
    icon: "⚖️",
    title: "Legal Heir Certificate",
    documents: [
      "Death certificate of the deceased",
      "Valid ID proof of applicant",
      "Relationship proof (Birth certificate, Marriage certificate)",
      "Affidavit on stamp paper (₹10 or ₹20)",
      "Two passport-sized photographs of applicant",
      "Address proof of applicant",
      "Notarized copies (if required)",
    ],
    processingTime: "3-5 business days",
  },
]

export default function BeforeYouVisitSection() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  return (
    <section id="documents" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">Plan Your Visit & Save Time</h2>
          <p className="text-lg text-gray-600">
            Know what documents you need before visiting us to avoid multiple trips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-slate-50 rounded-lg p-6 border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedService(service)
                }}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                View Required Documents
              </button>
            </div>
          ))}
        </div>

        {selectedService && (
          <>
            {/* Semi-transparent overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-fade-in"
              onClick={() => setSelectedService(null)}
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 animate-fade-in">
              <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
                {/* Header with close button */}
                <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-200 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={28} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Required Documents:</h4>
                    <ul className="space-y-2">
                      {selectedService.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-blue-900 font-bold mt-1">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Processing Time:</span>{" "}
                      {selectedService.processingTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </section>
  )
}
