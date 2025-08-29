"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, Brain, Code, Database, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TypingAnimation } from "./typing-animation"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  const typingTexts = [
    "Intelligence Artificielle",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP & Traitement du Langage",
    "Systèmes Distribués",
    "Développement Full-Stack",
  ]

  useEffect(() => {
    setIsVisible(true)

    return () => {}
  }, [])

  const handleDownloadCV = () => {
    // Convert Google Drive sharing link to direct download link
    const fileId = "1FxRNMhXpNTU72eLiouGc-w0eb8wtfdtd"
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`

    // Open the download link in a new tab
    window.open(downloadUrl, "_blank")
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating geometric shapes */}
        <div
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bounce opacity-60"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce opacity-60"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/3 left-1/6 w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce opacity-60"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="text-center space-y-8">
          {/* Enhanced Professional Photo */}
          <div
            className={`relative mx-auto w-44 h-44 mb-8 transition-all duration-1000 ${isVisible ? "animate-scale-in" : ""}`}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden group">
                  <Image
                    src="/images/bilal-photo.jpeg"
                    alt="Bilal SAJAI"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <Zap className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Enhanced name with creative gradients */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : ""}`}>
            <h1 className="text-6xl md:text-8xl font-bold perspective-1000">
              <span className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-500">
                Bilal SAJAI
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 font-medium">
              Ingénieur en <TypingAnimation texts={typingTexts} className="text-gradient-animated font-bold" />
            </h2>
          </div>

          {/* Enhanced animated badges with new colors */}
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            {[
              { icon: Brain, text: "Machine Learning", delay: "0s", color: "from-violet-500 to-purple-500" },
              { icon: Code, text: "Full-Stack Development", delay: "0.2s", color: "from-blue-500 to-indigo-500" },
              { icon: Database, text: "Distributed Systems", delay: "0.4s", color: "from-emerald-500 to-teal-500" },
            ].map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`px-6 py-3 text-sm hover-lift glass-effect hover:glass-effect-dark cursor-pointer group relative overflow-hidden transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg`}
                style={{ animationDelay: badge.delay }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <badge.icon className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative z-10 font-medium">{badge.text}</span>
              </Badge>
            ))}
          </div>

          {/* Enhanced description with better typography */}
          <p
            className={`text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-5xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            Passionné par l'
            <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-md">
              Intelligence Artificielle
            </span>{" "}
            et les technologies émergentes, je développe des solutions innovantes qui transforment les défis complexes
            en opportunités. Mon expertise couvre le{" "}
            <span className="text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded-md">
              Machine Learning
            </span>
            , le{" "}
            <span className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors cursor-pointer bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md">
              développement Full-Stack
            </span>{" "}
            et l'architecture de systèmes distribués.
          </p>

          {/* Enhanced CTA buttons with new gradients */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-900 ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            <Button
              size="lg"
              onClick={handleDownloadCV}
              className="btn-animated bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover-glow group border-0 px-8 py-4 text-lg"
            >
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Télécharger CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector("#projects")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="btn-animated hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-105 transition-all duration-300 group glass-effect border-2 border-blue-200 dark:border-blue-700 px-8 py-4 text-lg"
            >
              <span className="group-hover:animate-pulse bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Voir mes projets
              </span>
            </Button>
          </div>

          {/* Enhanced social links with new colors */}
          <div
            className={`flex justify-center gap-8 pt-8 transition-all duration-1000 delay-1100 ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            {[
              {
                icon: Mail,
                href: "mailto:contact.sajbilal@gmail.com",
                color: "hover:text-red-500",
                bg: "hover:bg-red-50 dark:hover:bg-red-900/20",
                gradient: "from-red-500 to-pink-500",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/bilal-sajai-639324293/",
                color: "hover:text-blue-600",
                bg: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                icon: Github,
                href: "https://github.com/Bilalsajai1",
                color: "hover:text-gray-900 dark:hover:text-white",
                bg: "hover:bg-gray-50 dark:hover:bg-gray-800",
                gradient: "from-gray-600 to-gray-800",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 ${social.color} ${social.bg} p-4 rounded-full transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 magnetic group relative overflow-hidden shadow-lg hover:shadow-xl`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300`}
                />
                <social.icon className="w-7 h-7 relative z-10 group-hover:animate-pulse" />
              </Link>
            ))}
          </div>

          {/* Enhanced scroll indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col items-center gap-3 group cursor-pointer">
              <span className="text-sm font-medium text-gray-500 group-hover:text-blue-500 transition-colors">
                Découvrir
              </span>
              <div className="w-6 h-10 border-2 border-gray-300 group-hover:border-blue-500 rounded-full flex justify-center transition-colors">
                <div className="w-1 h-3 bg-gray-400 group-hover:bg-blue-500 rounded-full mt-2 animate-bounce transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
