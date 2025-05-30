"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
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

  const sendEmail = async (templateParams: any) => {
    try {
      // Import EmailJS dynamically
      const emailjs = await import("@emailjs/browser")

      // Replace these with your actual EmailJS credentials
      const serviceId = "service_l5d8qho"
      const templateId = "template_wn789ra"
      const publicKey = "3VYRACiX8tyWYHJ--"

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)

      return result
    } catch (error) {
      console.error("EmailJS Error:", error)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        sent_date: new Date().toLocaleString("fr-FR"),
        to_email: "contact.sajbilal@gmail.com", // Your email
      }

      // Send email via EmailJS
      await sendEmail(templateParams)

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Show success feedback
      setShowSuccessBar(true)
      setTimeout(() => setShowSuccessBar(false), 6000)

      toast({
        title: "Message envoyé avec succès !",
        description: "Votre message a été envoyé à Bilal. Il vous répondra dans les plus brefs délais.",
        variant: "success",
        duration: 5000,
      })
    } catch (error) {
      console.error("Error sending email:", error)

      toast({
        title: "Erreur d'envoi",
        description: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou utiliser l'email direct.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
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
                  <Card className="group hover:shadow-md transition-all duration-300 cursor-pointer hover-lift">
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

            {/* Email Delivery Info */}
          </div>

          {/* Contact Form */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Mail className="w-6 h-6 text-blue-600" />
                Envoyez-moi un message
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Votre message sera envoyé directement à mon email personnel
              </p>
            </CardHeader>

            {/* Enhanced Success Bar */}
            {showSuccessBar && (
              <div className="mx-6 mb-4 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg shadow-lg animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Email envoyé avec succès ! ✉️</div>
                    <div className="text-sm text-green-100">
                      Votre message est arrivé dans ma boîte email. Je vous répondrai rapidement !
                    </div>
                  </div>
                </div>
                <div className="mt-3 w-full bg-white/20 rounded-full h-1.5">
                  <div
                    className="bg-white h-1.5 rounded-full transition-all duration-6000 ease-out"
                    style={{ width: "100%", animation: "shrink 6s linear forwards" }}
                  ></div>
                </div>
              </div>
            )}

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom complet"
                      required
                      disabled={isSubmitting}
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      required
                      disabled={isSubmitting}
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet de votre message"
                    required
                    disabled={isSubmitting}
                    className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet, votre demande, ou simplement dites bonjour..."
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  <div className="text-xs text-gray-500 mt-1">{formData.message.length}/1000 caractères</div>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-animated bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>

                <div className="text-xs text-gray-500 text-center">
                  En envoyant ce message, vous acceptez que vos données soient utilisées pour vous répondre.
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </section>
  )
}
