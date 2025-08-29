"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, Play, RotateCcw } from "lucide-react"

export function AnimationShowcase() {
  const [activeStyle, setActiveStyle] = useState("elegant")
  const [isPlaying, setIsPlaying] = useState(false)

  const animationStyles = [
    {
      id: "elegant",
      name: "Élégant & Minimal",
      description: "Animations subtiles et raffinées",
      color: "from-gray-500 to-slate-600",
      classes: "elegant-fade hover-elegant card-elegant",
    },
    {
      id: "bouncy",
      name: "Ludique & Rebondissant",
      description: "Mouvements dynamiques et joyeux",
      color: "from-orange-500 to-red-500",
      classes: "bouncy-entrance hover-bouncy card-bouncy",
    },
    {
      id: "tech",
      name: "Futuriste & Tech",
      description: "Effets high-tech et holographiques",
      color: "from-blue-500 to-cyan-500",
      classes: "tech-matrix hover-tech card-tech",
    },
    {
      id: "organic",
      name: "Organique & Naturel",
      description: "Mouvements fluides et naturels",
      color: "from-green-500 to-emerald-500",
      classes: "organic-grow hover-organic",
    },
    {
      id: "cinematic",
      name: "Cinématique & Dramatique",
      description: "Transitions épiques et immersives",
      color: "from-purple-500 to-pink-500",
      classes: "cinematic-reveal hover-cinematic",
    },
    {
      id: "geometric",
      name: "Géométrique & Abstrait",
      description: "Formes et rotations mathématiques",
      color: "from-indigo-500 to-purple-500",
      classes: "geometric-flip hover-geometric",
    },
    {
      id: "liquid",
      name: "Liquide & Fluide",
      description: "Morphing et déformations organiques",
      color: "from-teal-500 to-blue-500",
      classes: "liquid-morph hover-liquid",
    },
    {
      id: "retro",
      name: "Rétro & Vintage",
      description: "Style nostalgique et classique",
      color: "from-amber-500 to-orange-500",
      classes: "retro-slide hover-retro",
    },
  ]

  const playAnimation = () => {
    setIsPlaying(true)
    setTimeout(() => setIsPlaying(false), 2000)
  }

  const resetAnimations = () => {
    setIsPlaying(false)
    // Force re-render to restart animations
    const elements = document.querySelectorAll(".animation-demo")
    elements.forEach((el) => {
      el.classList.remove("animate")
      setTimeout(() => el.classList.add("animate"), 10)
    })
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Styles d'Animation
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Découvrez les différents styles d'animation disponibles dans le portfolio
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button onClick={playAnimation} className="btn-elegant">
              <Play className="w-4 h-4 mr-2" />
              Jouer les animations
            </Button>
            <Button variant="outline" onClick={resetAnimations} className="btn-bouncy bg-transparent">
              <RotateCcw className="w-4 h-4 mr-2" />
              Réinitialiser
            </Button>
          </div>
        </div>

        {/* Style Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {animationStyles.map((style) => (
            <Badge
              key={style.id}
              variant={activeStyle === style.id ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 transition-all duration-300 ${
                activeStyle === style.id ? `bg-gradient-to-r ${style.color} text-white hover-elegant` : "hover-bouncy"
              }`}
              onClick={() => setActiveStyle(style.id)}
            >
              {style.name}
            </Badge>
          ))}
        </div>

        {/* Animation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {animationStyles.map((style, index) => (
            <Card
              key={style.id}
              className={`animation-demo ${style.classes} ${
                isPlaying ? "animate" : ""
              } cursor-pointer transition-all duration-500 ${
                activeStyle === style.id ? "ring-2 ring-blue-500 ring-offset-2" : ""
              }`}
              onClick={() => setActiveStyle(style.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${style.color} flex items-center justify-center mb-3 mx-auto`}
                >
                  <div className="w-6 h-6 bg-white rounded-full" />
                </div>
                <CardTitle className="text-lg text-center">{style.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{style.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Style Details */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Style Actif: {animationStyles.find((s) => s.id === activeStyle)?.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Button Examples */}
                <div className="text-center">
                  <h4 className="font-semibold mb-4">Boutons</h4>
                  <div className="space-y-3">
                    <Button
                      className={`w-full ${
                        activeStyle === "elegant"
                          ? "btn-elegant"
                          : activeStyle === "bouncy"
                            ? "btn-bouncy"
                            : activeStyle === "tech"
                              ? "btn-tech"
                              : "btn-elegant"
                      }`}
                    >
                      Bouton Principal
                    </Button>
                    <Button
                      variant="outline"
                      className={`w-full ${
                        activeStyle === "elegant"
                          ? "hover-elegant"
                          : activeStyle === "bouncy"
                            ? "hover-bouncy"
                            : activeStyle === "tech"
                              ? "hover-tech"
                              : "hover-elegant"
                      }`}
                    >
                      Bouton Secondaire
                    </Button>
                  </div>
                </div>

                {/* Text Examples */}
                <div className="text-center">
                  <h4 className="font-semibold mb-4">Texte</h4>
                  <div className="space-y-3">
                    <p
                      className={`${
                        activeStyle === "elegant"
                          ? "text-elegant"
                          : activeStyle === "bouncy"
                            ? "text-bouncy"
                            : activeStyle === "tech"
                              ? "text-tech tech-neon"
                              : activeStyle === "organic"
                                ? "text-organic"
                                : "text-elegant"
                      }`}
                    >
                      Titre Principal
                    </p>
                    <p className="text-sm text-gray-600">Texte descriptif avec animation</p>
                  </div>
                </div>

                {/* Loading Examples */}
                <div className="text-center">
                  <h4 className="font-semibold mb-4">Chargement</h4>
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 bg-blue-500 rounded-full ${
                          activeStyle === "elegant"
                            ? "loading-elegant"
                            : activeStyle === "bouncy"
                              ? "loading-bouncy"
                              : activeStyle === "tech"
                                ? "loading-tech"
                                : activeStyle === "organic"
                                  ? "loading-organic"
                                  : "loading-elegant"
                        }`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Style Description */}
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2">Caractéristiques du style :</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {animationStyles.find((s) => s.id === activeStyle)?.description}
                </p>

                <div className="mt-4">
                  <h5 className="font-medium mb-2">Classes CSS utilisées :</h5>
                  <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                    {animationStyles.find((s) => s.id === activeStyle)?.classes}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
