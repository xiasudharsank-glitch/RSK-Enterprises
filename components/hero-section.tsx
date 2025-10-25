"use client"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              All Government Services & Printing, Solved.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Welcome to RSK Enterprises – Your one-stop solution for Aadhaar, PAN, Certificates, Bill Payments, and
              more in Ramjinagar, Trichy. Save time, avoid hassle."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View Our Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Find Us on Map
              </button>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-muted rounded-lg overflow-hidden shadow-lg h-96 flex items-center justify-center">
              <img
                src="/shop-front-storefront-government-services-center.jpg"
                alt="RSK Enterprises Shop Front"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
