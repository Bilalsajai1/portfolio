import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Brain, Heart, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Reconnaissance de Texte Manuscrit par Deep Learning",
      institution: "ENSET Mohammedia",
      date: "Octobre 2024",
      icon: Brain,
      image: "/images/handwriting.jpeg",
      description:
        "Développement innovant d'un système de reconnaissance de texte manuscrit anglais combinant des approches custom et de fine-tuning de modèles pré-entraînés, avec une attention particulière sur l'optimisation de TrOCR.",
      features: [
        "Approche hybride : Modèle CNN-GRU custom avec mécanisme d'auto-attention",
        "Innovation TrOCR : Fine-tuning du modèle Transformer pré-entraîné pour texte manuscrit anglais",
        "Performance exceptionnelle : CER de 6.19% et WER de 21.19% avec le modèle custom",
        "Évaluation comparative : CNN-LSTM, ViT-LSTM, CNN-GRU et TrOCR fine-tuné",
        "Article de recherche publié détaillant les méthodologies et résultats",
      ],
      technologies: [
        { name: "Python", logo: "🐍" },
        { name: "TensorFlow", logo: "🔥" },
        { name: "PyTorch", logo: "⚡" },
        { name: "OpenCV", logo: "👁️" },
        { name: "NumPy", logo: "🔢" },
      ],
      color: "from-purple-500 to-pink-500",
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
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projets Techniques</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Une sélection de mes projets les plus significatifs en IA et développement
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}
                >
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <div className="text-sm text-gray-500 space-y-1">
                  <div>{project.institution}</div>
                  <div>{project.date}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>

                <div>
                  <h4 className="font-semibold mb-2">Fonctionnalités clés :</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs flex items-center gap-1">
                        <span>{tech.logo}</span>
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href="https://github.com/Bilalsajai1" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  {index === 0 && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link
                        href="https://medium.com/@bilal.sajai-etu/enhancement-of-handwritten-text-recognition-b45b27ef3c4d"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Article
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
