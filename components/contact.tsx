import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "./contact-form"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact.sajbilal@gmail.com",
      href: "mailto:contact.sajbilal@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "(212) 679549978",
      href: "tel:+212679549978",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Bilal Sajai",
      href: "https://www.linkedin.com/in/bilal-sajai-639324293/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Voir mes projets",
      href: "https://github.com/Bilalsajai1",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Discutons de vos projets IA et de collaboration</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Restons en contact</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Je suis toujours ouvert aux opportunités de collaboration, aux projets innovants en IA, et aux
                discussions techniques. N'hésitez pas à me contacter !
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold">{item.label}</div>
                          <div className="text-gray-600 dark:text-gray-400">{item.value}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">Disponibilité</h4>
                <p className="text-blue-100">
                  Actuellement en stage chez PERENITY Software jusqu'en juin 2025. Ouvert aux opportunités pour
                  septembre 2025.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
