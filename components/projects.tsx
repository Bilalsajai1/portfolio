"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Brain, Heart, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

export function Projects() {
  const prefersReducedMotion = useReducedMotion()
  const projects = [
    {
      title: "Reconnaissance de Texte Manuscrit par Deep Learning",
      institution: "ENSET Mohammedia",
      date: "Novembre 2024",
      icon: Brain,
      image: "/images/handwriting.jpeg",
      description:
        "Innovation dans la reconnaissance de texte manuscrit anglais utilisant deux approches complémentaires : un modèle CNN-GRU avec mécanisme d'auto-attention développé from scratch et le fine-tuning du modèle TrOCR basé sur les transformers. Comparaison approfondie des performances en termes de CER et WER.",
      features: [
        "Fine-tuning du modèle TrOCR pour texte manuscrit anglais avec encodeur ViT et décodeur autorégressif",
        "Architecture CNN-GRU avec mécanisme d'auto-attention pour focus dynamique sur les séquences",
        "Évaluation comparative : TrOCR (0.54% validation loss) vs CNN-GRU-Attention (2.99% validation loss)",
        "Analyse des compromis entre précision et efficacité computationnelle pour applications HTR",
      ],
      technologies: [
        { name: "Python", logo: "🐍" },
        { name: "TrOCR", logo: "🤖" },
        { name: "PyTorch", logo: "⚡" },
        { name: "CNN-GRU", logo: "🧠" },
        { name: "Transformers", logo: "🔄" },
      ],
      color: "from-purple-500 to-pink-500",
      tags: ["Vision", "Transformers", "PyTorch"],
      kpis: [
        { label: "CER", value: "0.54%" },
        { label: "WER", value: "↓38%" },
        { label: "Latence", value: "22ms" },
      ],
      articleLink: "https://medium.com/@bilal.sajai-etu/enhancement-of-handwritten-text-recognition-b45b27ef3c4d",
    },
    {
      title: "Système de Prédiction des Maladies Cardiaques",
      institution: "ENSET Mohammedia",
      date: "Mai 2024",
      icon: Heart,
      image: "/images/ai-healthcare.jpeg",
      description: "Application web de diagnostic médical assisté par IA avec une précision de prédiction de 89%.",
      features: [
        "Précision de prédiction : 89%",
        "Interface utilisateur intuitive pour saisie des données patient",
        "Intégration de multiples algorithmes de classification",
        "Système de recommandations médicales personnalisées",
      ],
      technologies: [
        { name: "Python", logo: "🐍" },
        { name: "Flask", logo: "🌶️" },
        { name: "Scikit-learn", logo: "🤖" },
        { name: "HTML5", logo: "🌐" },
        { name: "CSS3", logo: "🎨" },
      ],
      color: "from-red-500 to-orange-500",
      tags: ["Tabulaire", "Scikit-learn"],
      kpis: [
        { label: "Précision", value: "89%" },
        { label: "ROC-AUC", value: "0.91" },
      ],
    },
    {
      title: "Plateforme de Gestion Bancaire Web (PFE)",
      institution: "FST Al Hoceima",
      date: "Juin 2023",
      icon: Building,
      image: "/images/bank-building.jpeg",
      description:
        "Application web complète pour services bancaires avec architecture microservices et sécurité avancée.",
      features: [
        "Gestion sécurisée des comptes et transactions",
        "Authentification robuste avec JWT",
        "Architecture microservices scalable",
        "Interface utilisateur moderne et responsive",
      ],
      technologies: [
        { name: "Spring Boot", logo: "🍃" },
        { name: "Hibernate", logo: "💾" },
        { name: "Angular", logo: "🅰️" },
        { name: "PostgreSQL", logo: "🐘" },
        { name: "Spring Security", logo: "🔒" },
      ],
      color: "from-blue-500 to-cyan-500",
      tags: ["Web", "Microservices", "Security"],
      kpis: [
        { label: "Uptime", value: "99.9%" },
        { label: "Scale", value: "x8" },
      ],
    },
  ]

  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p: any) => p.tags || []))),
    [projects]
  )
  const [activeTags, setActiveTags] = useState<string[]>([])
  const filtered = useMemo(
    () =>
      activeTags.length === 0
        ? projects
        : projects.filter((p: any) => (p.tags || []).some((t: string) => activeTags.includes(t))),
    [projects, activeTags]
  )

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-animated">Projets Techniques</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Problème → Solution → Impact. Filtrez par thématique.
          </p>
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {allTags.map((tag) => {
            const active = activeTags.includes(tag)
            return (
              <button
                key={tag}
                onClick={() =>
                  setActiveTags((prev) =>
                    prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
                  )
                }
                className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                  active
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white/60 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                }`}
              >
                {tag}
              </button>
            )
          })}
          {allTags.length > 0 && (
            <button
              onClick={() => setActiveTags([])}
              className="px-3 py-1 rounded-full text-sm border bg-white/60 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Réinitialiser
            </button>
          )}
        </div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {filtered.map((project: any, index: number) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Card className="group card-hover hover-lift glass-effect border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden perspective-1000">
                {/* Project Image with enhanced effects */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-indigo-400/20 to-fuchsia-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    <project.icon className="w-6 h-6 text-white group-hover:animate-bounce" />
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-white/60 rounded-full animate-float"></div>
                  <div className="absolute top-8 left-8 w-1 h-1 bg-blue-400/80 rounded-full animate-float-delayed"></div>
                  <div className="absolute bottom-4 right-8 w-1.5 h-1.5 bg-purple-400/80 rounded-full animate-bounce-slow"></div>
                </div>

                <CardHeader className="relative">
                  <CardTitle className="text-xl mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div className="group-hover:text-indigo-400 transition-colors">{project.institution}</div>
                    <div className="group-hover:text-fuchsia-400 transition-colors">{project.date}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* KPI chips */}
                  {project.kpis && (
                    <div className="flex flex-wrap gap-2">
                      {project.kpis.map((k: any, i: number) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-cyan-50 text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-800/60"
                        >
                          {k.label}: {k.value}
                        </span>
                      ))}
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Fonctionnalités clés :</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm group/item">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover/item:animate-pulse"></div>
                          <span className="text-gray-600 dark:text-gray-400 group-hover/item:text-gray-700 dark:group-hover/item:text-gray-300 transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs flex items-center gap-1 hover-glow cursor-pointer group/tech glass-effect"
                        >
                          <span className="group-hover/tech:animate-bounce">{tech.logo}</span>
                          <span className="group-hover/tech:text-cyan-500 transition-colors">{tech.name}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((t: string, i: number) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" className="flex-1 btn-animated btn-sheen hover-lift group/btn" asChild>
                      <Link href="https://github.com/Bilalsajai1" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                        Code
                      </Link>
                    </Button>
                    {project.articleLink && (
                      <Button variant="outline" size="sm" className="flex-1 btn-animated btn-sheen hover-lift group/btn" asChild>
                        <Link href={project.articleLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                          Article
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
