"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, Brain, Code, Database, ArrowDown, Sparkles } from "lucide-react"
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-spin-slower"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="text-center space-y-8">
          {/* Professional Photo with enhanced animations */}
          <div
            className={`relative mx-auto w-40 h-40 mb-8 transition-all duration-1000 ${isVisible ? "animate-scale-in" : ""}`}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-spin-slow p-1 animate-pulse-glow">
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
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce-slow">
              <Brain className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-float">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Enhanced name with multiple animations */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : ""}`}>
            <h1 className="text-5xl md:text-7xl font-bold perspective-1000">
              <span className="inline-block animate-text-shimmer hover:animate-gradient-xy bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent bg-400% transform-style-3d hover:rotate-y-12 transition-transform duration-500">
                Bilal SAJAI
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
              Ingénieur en <TypingAnimation texts={typingTexts} className="text-gradient-animated font-bold" />
            </h2>
          </div>

          {/* Enhanced animated badges */}
          <div
            className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            {[
              { icon: Brain, text: "Machine Learning", delay: "0s", color: "from-purple-500 to-pink-500" },
              { icon: Code, text: "Full-Stack Development", delay: "0.2s", color: "from-blue-500 to-cyan-500" },
              { icon: Database, text: "Distributed Systems", delay: "0.4s", color: "from-green-500 to-emerald-500" },
            ].map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`px-4 py-2 text-sm stagger-item hover-lift glass-effect hover:glass-effect-dark cursor-pointer group relative overflow-hidden`}
                style={{ animationDelay: badge.delay }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <badge.icon className="w-4 h-4 mr-2 group-hover:animate-spin transition-transform duration-300" />
                <span className="relative z-10">{badge.text}</span>
              </Badge>
            ))}
          </div>

          {/* Enhanced description */}
          <p
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            Passionné par l'
            <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer">
              Intelligence Artificielle
            </span>{" "}
            et les technologies émergentes, je développe des solutions innovantes qui transforment les défis complexes
            en opportunités. Mon expertise couvre le{" "}
            <span className="text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer">
              Machine Learning
            </span>
            , le{" "}
            <span className="text-green-600 font-semibold hover:text-green-700 transition-colors cursor-pointer">
              développement Full-Stack
            </span>{" "}
            et l'architecture de systèmes distribués.
          </p>

          {/* Enhanced CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            <Button
              size="lg"
              className="btn-animated bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover-glow group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
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
              className="btn-animated hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-105 transition-all duration-300 group glass-effect"
            >
              <span className="group-hover:animate-pulse">Voir mes projets</span>
            </Button>
          </div>

          {/* Enhanced social links */}
          <div
            className={`flex justify-center gap-6 pt-8 transition-all duration-1000 delay-1100 ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            {[
              {
                icon: Mail,
                href: "mailto:contact.sajbilal@gmail.com",
                color: "hover:text-red-500",
                bg: "hover:bg-red-50 dark:hover:bg-red-900/20",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/bilal-sajai-639324293/",
                color: "hover:text-blue-600",
                bg: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
              },
              {
                icon: Github,
                href: "https://github.com/Bilalsajai1",
                color: "hover:text-gray-900 dark:hover:text-white",
                bg: "hover:bg-gray-50 dark:hover:bg-gray-800",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 ${social.color} ${social.bg} p-3 rounded-full transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 magnetic group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <social.icon className="w-6 h-6 relative z-10 group-hover:animate-pulse" />
              </Link>
            ))}
          </div>

          {/* Enhanced scroll indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${isVisible ? "animate-bounce-slow" : ""}`}
          >
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <span className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors">Scroll</span>
              <ArrowDown className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
