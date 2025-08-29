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
  const [animationStyle, setAnimationStyle] = useState("elegant")

  const typingTexts = [
    "Intelligence Artificielle",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP & Traitement du Langage",
    "Systèmes Distribués",
    "Développement Full-Stack",
  ]

  const animationStyles = [
    { id: "elegant", name: "Élégant", classes: "elegant-fade hover-elegant" },
    { id: "bouncy", name: "Ludique", classes: "bouncy-entrance hover-bouncy" },
    { id: "tech", name: "Tech", classes: "tech-matrix hover-tech" },
    { id: "organic", name: "Organique", classes: "organic-grow hover-organic" },
    { id: "cinematic", name: "Cinématique", classes: "cinematic-reveal hover-cinematic" },
  ]

  useEffect(() => {
    setIsVisible(true)

    // Cycle through animation styles every 10 seconds
    const interval = setInterval(() => {
      setAnimationStyle((prev) => {
        const currentIndex = animationStyles.findIndex((style) => style.id === prev)
        const nextIndex = (currentIndex + 1) % animationStyles.length
        return animationStyles[nextIndex].id
      })
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const handleDownloadCV = () => {
    const fileId = "1FxRNMhXpNTU72eLiouGc-w0eb8wtfdtd"
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`
    window.open(downloadUrl, "_blank")
  }

  const currentStyle = animationStyles.find((style) => style.id === animationStyle)

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

        {/* Floating geometric shapes with different styles */}
        <div
          className={`absolute top-1/4 right-1/4 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-60 ${
            animationStyle === "bouncy"
              ? "bouncy-jello"
              : animationStyle === "tech"
                ? "tech-hologram"
                : animationStyle === "organic"
                  ? "organic-sway"
                  : animationStyle === "liquid"
                    ? "liquid-bubble"
                    : "animate-bounce"
          }`}
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className={`absolute bottom-1/3 left-1/4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 ${
            animationStyle === "geometric"
              ? "geometric-rotate"
              : animationStyle === "cinematic"
                ? "cinematic-fade"
                : "animate-bounce"
          }`}
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="text-center space-y-8">
          {/* Animation Style Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {animationStyles.map((style) => (
              <Badge
                key={style.id}
                variant={animationStyle === style.id ? "default" : "outline"}
                className={`cursor-pointer px-3 py-1 text-xs transition-all duration-300 ${
                  animationStyle === style.id ? "bg-blue-500 text-white" : ""
                } ${style.classes.split(" ")[1] || "hover-elegant"}`}
                onClick={() => setAnimationStyle(style.id)}
              >
                {style.name}
              </Badge>
            ))}
          </div>

          {/* Enhanced Professional Photo with dynamic animation styles */}
          <div
            className={`relative mx-auto w-44 h-44 mb-8 transition-all duration-1000 ${
              isVisible ? currentStyle?.classes.split(" ")[0] || "elegant-fade" : ""
            } ${
              animationStyle === "liquid"
                ? "liquid-morph"
                : animationStyle === "organic"
                  ? "organic-sway"
                  : animationStyle === "tech"
                    ? "tech-hologram"
                    : ""
            }`}
          >
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl ${
                animationStyle === "tech"
                  ? "tech-neon"
                  : animationStyle === "organic"
                    ? "organic-bloom"
                    : "animate-pulse"
              }`}
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-1">
                <div
                  className={`relative w-full h-full rounded-full overflow-hidden group ${
                    animationStyle === "liquid"
                      ? "liquid-morph"
                      : animationStyle === "geometric"
                        ? "geometric-flip"
                        : ""
                  }`}
                >
                  <Image
                    src="/images/bilal-photo.jpeg"
                    alt="Bilal SAJAI"
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                      animationStyle === "retro" ? "retro-flicker" : ""
                    }`}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Enhanced decorative elements with dynamic styles */}
            <div
              className={`absolute -bottom-3 -right-3 w-14 h-14 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg ${
                currentStyle?.classes.split(" ")[1] || "hover-elegant"
              } ${
                animationStyle === "bouncy"
                  ? "bouncy-jello"
                  : animationStyle === "tech"
                    ? "tech-scan"
                    : animationStyle === "organic"
                      ? "organic-wave"
                      : ""
              }`}
            >
              <Brain
                className={`w-7 h-7 text-white ${
                  animationStyle === "tech" ? "tech-glitch" : animationStyle === "bouncy" ? "bouncy-wiggle" : ""
                }`}
              />
            </div>
            <div
              className={`absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg ${
                currentStyle?.classes.split(" ")[1] || "hover-elegant"
              } ${
                animationStyle === "liquid" ? "liquid-flow" : animationStyle === "geometric" ? "geometric-unfold" : ""
              }`}
            >
              <Sparkles
                className={`w-5 h-5 text-white ${
                  animationStyle === "retro" ? "retro-flicker" : animationStyle === "cinematic" ? "cinematic-zoom" : ""
                }`}
              />
            </div>
            <div
              className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg ${
                currentStyle?.classes.split(" ")[1] || "hover-elegant"
              }`}
            >
              <Zap className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Enhanced name with dynamic text animations */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? currentStyle?.classes.split(" ")[0] || "elegant-fade" : ""
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold perspective-1000">
              <span
                className={`inline-block bg-gradient-to-r from-blue-600 via-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-500 ${
                  animationStyle === "tech" ? "tech-neon" : animationStyle === "retro" ? "retro-typewriter" : ""
                }`}
              >
                Bilal SAJAI
              </span>
            </h1>
            <h2
              className={`text-2xl md:text-4xl text-gray-700 dark:text-gray-300 font-medium ${
                animationStyle === "bouncy"
                  ? "text-bouncy"
                  : animationStyle === "tech"
                    ? "text-tech"
                    : animationStyle === "organic"
                      ? "text-organic"
                      : "text-elegant"
              }`}
            >
              Ingénieur en <TypingAnimation texts={typingTexts} className="text-gradient-animated font-bold" />
            </h2>
          </div>

          {/* Enhanced animated badges with dynamic styles */}
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? currentStyle?.classes.split(" ")[0] || "elegant-fade" : ""
            }`}
          >
            {[
              { icon: Brain, text: "Machine Learning", delay: "0s", color: "from-violet-500 to-purple-500" },
              { icon: Code, text: "Full-Stack Development", delay: "0.2s", color: "from-blue-500 to-indigo-500" },
              { icon: Database, text: "Distributed Systems", delay: "0.4s", color: "from-emerald-500 to-teal-500" },
            ].map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`px-6 py-3 text-sm cursor-pointer group relative overflow-hidden transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg ${
                  currentStyle?.classes.split(" ")[1] || "hover-elegant"
                } ${
                  animationStyle === "liquid" ? "liquid-morph" : animationStyle === "geometric" ? "geometric-flip" : ""
                }`}
                style={{ animationDelay: badge.delay }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <badge.icon
                  className={`w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110 ${
                    animationStyle === "bouncy" ? "bouncy-wiggle" : animationStyle === "tech" ? "tech-glitch" : ""
                  }`}
                />
                <span className="relative z-10 font-medium">{badge.text}</span>
              </Badge>
            ))}
          </div>

          {/* Enhanced description */}
          <p
            className={`text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-5xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
              isVisible ? currentStyle?.classes.split(" ")[0] || "elegant-fade" : ""
            }`}
          >
            Passionné par l'
            <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-md">
              Intelligence Artificielle
            </span>{" "}
            et les technologies émergentes, je développe des solutions innovantes qui transforment les défis complexes
            en opportunités.
          </p>

          {/* Enhanced CTA buttons with dynamic styles */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-900 ${
              isVisible ? currentStyle?.classes.split(" ")[0] || "elegant-fade" : ""
            }`}
          >
            <Button
              size="lg"
              onClick={handleDownloadCV}
              className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform transition-all duration-300 shadow-xl hover:shadow-2xl group border-0 px-8 py-4 text-lg ${
                animationStyle === "elegant"
                  ? "btn-elegant"
                  : animationStyle === "bouncy"
                    ? "btn-bouncy"
                    : animationStyle === "tech"
                      ? "btn-tech"
                      : "btn-elegant"
              }`}
            >
              <Download
                className={`w-6 h-6 mr-3 ${
                  animationStyle === "bouncy"
                    ? "group-hover:bouncy-jello"
                    : animationStyle === "tech"
                      ? "group-hover:tech-glitch"
                      : "group-hover:animate-bounce"
                }`}
              />
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
              className={`transform transition-all duration-300 group glass-effect border-2 border-blue-200 dark:border-blue-700 px-8 py-4 text-lg ${
                currentStyle?.classes.split(" ")[1] || "hover-elegant"
              }`}
            >
              <span className="group-hover:animate-pulse bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Voir mes projets
              </span>
            </Button>
          </div>

          {/* Enhanced social links with dynamic styles */}
          <div
            className={`flex justify-center gap-8 pt-8 transition-all duration-1000 delay-1100 ${
              isVisible ? currentStyle?.classes.split(" ")[0] || "elegant-fade" : ""
            }`}
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
                className={`text-gray-600 ${social.color} ${social.bg} p-4 rounded-full transition-all duration-300 transform group relative overflow-hidden shadow-lg hover:shadow-xl ${
                  currentStyle?.classes.split(" ")[1] || "hover-elegant"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300`}
                />
                <social.icon
                  className={`w-7 h-7 relative z-10 ${
                    animationStyle === "tech"
                      ? "group-hover:tech-glitch"
                      : animationStyle === "bouncy"
                        ? "group-hover:bouncy-wiggle"
                        : "group-hover:animate-pulse"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Current Animation Style Indicator */}
          <div className="absolute bottom-4 right-4 text-xs text-gray-500 bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full backdrop-blur-sm">
            Style: {currentStyle?.name}
          </div>
        </div>
      </div>
    </section>
  )
}
