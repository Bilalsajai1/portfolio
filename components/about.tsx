import type React from "react"
import { Brain, Code, Database, Globe } from "lucide-react"
import { InteractiveCard } from "./interactive-card"

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "Expertise en NLP, Computer Vision et Machine Learning avec des modèles avancés comme BERT et spaCy",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Développement Full-Stack",
      description: "Maîtrise de Spring Boot, Angular, Python et développement d'applications web scalables",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "Systèmes Distribués",
      description: "Architecture microservices, bases de données et solutions d'entreprise robustes",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Innovation Métier",
      description: "Automatisation de processus KYC et digitalisation de workflows complexes",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">À Propos</h2>
          <p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Ingénieur passionné par l'IA et les systèmes distribués, je transforme les idées innovantes en solutions
            technologiques concrètes. Mon approche combine créativité et rigueur technique pour relever les défis de
            demain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <InteractiveCard
              key={index}
              className="animate-fade-in-up border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              style={{ animationDelay: `${0.1 * index}s` } as React.CSSProperties}
            >
              <div className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  )
}
