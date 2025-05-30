"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  timestamp: string
}

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessBar, setShowSuccessBar] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate network delay
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: Date.now().toString(),
        ...formData,
        timestamp: new Date().toLocaleString("fr-FR"),
      }

      setMessages((prev) => [newMessage, ...prev])

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setIsSubmitting(false)

      // Show success bar
      setShowSuccessBar(true)

      // Hide success bar after 5 seconds
      setTimeout(() => {
        setShowSuccessBar(false)
      }, 5000)

      // Show success toast
      toast({
        title: "Message envoyé !",
        description: "Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.",
        variant: "success",
        duration: 5000,
      })
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
                  Actuellement en stage chez PERENITY Software jusqu'en juin 2025. Ouvert aux opportunités après juin
                  2025.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Envoyez-moi un message</CardTitle>
            </CardHeader>
            {showSuccessBar && (
              <div className="mx-6 mb-4 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg shadow-lg animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Message envoyé avec succès !</div>
                    <div className="text-sm text-green-100">Je vous répondrai dans les plus brefs délais.</div>
                  </div>
                </div>
                <div className="mt-3 w-full bg-white/20 rounded-full h-1">
                  <div className="bg-white h-1 rounded-full animate-pulse" style={{ width: "100%" }}></div>
                </div>
              </div>
            )}
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Sujet</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet de votre message"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={6}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
