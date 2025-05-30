"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, Brain, Code, Database, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TypingAnimation } from "./typing-animation"

export function Hero() {
  const typingTexts = [
    "Intelligence Artificielle",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP & Traitement du Langage",
    "Systèmes Distribués",
    "Développement Full-Stack",
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="text-center space-y-8">
          {/* Professional Photo */}
          <div className="relative mx-auto w-40 h-40 mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image src="/images/bilal-photo.jpeg" alt="Bilal SAJAI" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <Brain className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Name with Gradient Animation */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x bg-300%">
                Bilal SAJAI
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
              Ingénieur en{" "}
              <TypingAnimation texts={typingTexts} className="text-blue-600 dark:text-blue-400 font-bold" />
            </h2>
          </div>

          {/* Animated Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Brain, text: "Machine Learning", delay: "0s" },
              { icon: Code, text: "Full-Stack Development", delay: "0.2s" },
              { icon: Database, text: "Distributed Systems", delay: "0.4s" },
            ].map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm animate-fade-in-up hover:scale-105 transition-transform cursor-pointer"
                style={{ animationDelay: badge.delay }}
              >
                <badge.icon className="w-4 h-4 mr-2" />
                {badge.text}
              </Badge>
            ))}
          </div>

          {/* Description with Fade In */}
          <p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Passionné par l'<span className="text-blue-600 font-semibold">Intelligence Artificielle</span> et les
            technologies émergentes, je développe des solutions innovantes qui transforment les défis complexes en
            opportunités. Mon expertise couvre le{" "}
            <span className="text-purple-600 font-semibold">Machine Learning</span>, le{" "}
            <span className="text-green-600 font-semibold">développement Full-Stack</span> et l'architecture de systèmes
            distribués.
          </p>

          {/* Interactive CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
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
              className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-105 transition-all duration-300"
            >
              Voir mes projets
            </Button>
          </div>

          {/* Social Links with Hover Effects */}
          <div className="flex justify-center gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: "1s" }}>
            {[
              { icon: Mail, href: "mailto:contact.sajbilal@gmail.com", color: "hover:text-red-500" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/bilal-sajai-639324293/",
                color: "hover:text-blue-600",
              },
              {
                icon: Github,
                href: "https://github.com/Bilalsajai1",
                color: "hover:text-gray-900 dark:hover:text-white",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
              >
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
