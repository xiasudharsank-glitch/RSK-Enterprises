"use client"

import { useState, useEffect } from "react"

export default function OperatingHoursSection() {
  const [currentStatus, setCurrentStatus] = useState<"OPEN" | "CLOSED">("OPEN")

  useEffect(() => {
    const updateStatus = () => {
      // Get current time in IST
      const now = new Date()
      const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }))
      const day = istTime.getDay()
      const hours = istTime.getHours()
      const minutes = istTime.getMinutes()
      const currentTime = hours * 60 + minutes

      // Sunday: Closed
      if (day === 0) {
        setCurrentStatus("CLOSED")
        return
      }

      // Morning: 9:00 AM - 2:00 PM (540-840 minutes)
      // Evening: 4:00 PM - 8:30 PM (960-1050 minutes)
      if ((currentTime >= 540 && currentTime < 840) || (currentTime >= 960 && currentTime < 1050)) {
        setCurrentStatus("OPEN")
      } else {
        setCurrentStatus("CLOSED")
      }
    }

    updateStatus()
    const interval = setInterval(updateStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  const schedule = [
    { day: "Monday", morning: "9:00 AM – 2:00 PM", evening: "4:00 – 8:30 PM" },
    { day: "Tuesday", morning: "9:00 AM – 2:00 PM", evening: "4:00 – 8:30 PM" },
    { day: "Wednesday", morning: "9:00 AM – 2:00 PM", evening: "4:00 – 8:30 PM" },
    { day: "Thursday", morning: "9:00 AM – 2:00 PM", evening: "4:00 – 8:30 PM" },
    { day: "Friday", morning: "9:00 AM – 2:00 PM", evening: "4:00 – 8:30 PM" },
    { day: "Saturday", morning: "9:00 AM – 2:00 PM", evening: "4:00 – 8:30 PM" },
    { day: "Sunday", morning: "Closed", evening: "Closed" },
  ]

  return (
    <section id="hours" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Our Working Hours</h2>
          <div className="inline-block bg-gray-800 rounded-lg px-6 py-3 border border-gray-700">
            <p className="text-lg text-white">
              <span className="font-semibold">Dynamic Status:</span> We are currently:{" "}
              <span className={`font-bold ml-2 ${currentStatus === "OPEN" ? "text-green-400" : "text-red-400"}`}>
                {currentStatus}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th className="px-6 py-4 text-left font-semibold text-white">Day</th>
                <th className="px-6 py-4 text-left font-semibold text-white">Morning</th>
                <th className="px-6 py-4 text-left font-semibold text-white">Evening</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, idx) => (
                <tr key={idx} className="border-t border-gray-700 hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{item.day}</td>
                  <td className="px-6 py-4 text-gray-300">{item.morning}</td>
                  <td className="px-6 py-4 text-gray-300">{item.evening}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
