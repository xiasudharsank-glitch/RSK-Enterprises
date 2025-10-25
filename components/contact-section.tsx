"use client"

import { Mail, MapPin, Youtube } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">Get In Touch</h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    1/96A, Keela Street, Malaipatti,
K.Kallikudy North
                    <br />
                   Ramjinagar Post,
Trichy, Tamil Nadu 620009, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:rskesevai@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    rskesevai@gmail.com
                  </a>
                </div>
              </div>

              {/* YouTube */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Youtube className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">YouTube</h3>
                  <a
                    href="https://m.youtube.com/@rsk.enterprises"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Subscribe to our channel
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                >
                  Open in Google Maps
                </a>
                <a
                  href="mailto:rskesevai@gmail.com"
                  className="block w-full px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors text-center"
                >
                  Email Us
                </a>
                <a
                  href="https://m.youtube.com/@rsk.enterprises"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors text-center"
                >
                  Subscribe on YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Map Placeholder */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-muted rounded-lg overflow-hidden shadow-lg h-96 flex items-center justify-center">
              <img
                src="/google-maps-location-trichy.jpg"
                alt="RSK Enterprises Location Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
