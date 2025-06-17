import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import Image from "next/image"

export function Experience() {
  const experience = {
    company: "PERENITY Software",
    position: "Stagiaire Ingénieur IA/Développement Full-Stack",
    period: "Février 2025 - Juin 2025 (5 mois)",
    location: "Maroc",
    project: "Portail d'Onboarding Intelligent avec IA pour l'extraction KYC",
    description:
      "Conception et développement d'une plateforme complète d'onboarding client automatisée pour sociétés de gestion, intégrant des technologies d'IA avancées pour l'extraction intelligente de données à partir de documents officiels.",
    achievements: [
      "Développement Full-Stack : Portail web responsive avec Spring Boot (Backend) et Angular (Frontend)",
      "Intelligence Artificielle : Implémentation d'un système OCR hybride (Tesseract + EasyOCR)",
      "NLP Avancé : Développement d'un modèle NER personnalisé avec spaCy et intégration de BERT",
      "Traitement de Documents : Extraction automatisée de données KYC (CIN, Passeport, RC, Patente)",
      "Validation Intelligente : Système de validation par expressions régulières",
    ],
    impact: [
      "Digitalisation complète du processus d'onboarding client",
      "Réduction significative du temps de traitement des dossiers",
      "Amélioration de l'expérience utilisateur avec suivi en temps réel",
      "Optimisation de la gestion de la relation prospects",
    ],
    technologies: [
      "Spring Boot",
      "Angular",
      "Python",
      "spaCy",
      "BERT",
      "Tesseract OCR",
      "EasyOCR",
      "NLP",
      "Machine Learning",
    ],
  }

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Expérience Professionnelle</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Mon parcours professionnel en intelligence artificielle et développement
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex flex-col gap-6">
              {/* Company Logo - Always at the top for mobile */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-40 h-40">
                  <Image
                    src="/images/perenity-logo.png"
                    alt="PERENITY Software"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Experience Details */}
              <div className="text-center md:text-left">
                <CardTitle className="text-xl md:text-2xl text-blue-600 mb-4">{experience.position}</CardTitle>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 mb-2 justify-center md:justify-start">
                  <Building className="w-4 h-4" />
                  <span className="font-semibold">{experience.company}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 justify-center md:justify-start">
                  <div className="flex items-center gap-1 justify-center md:justify-start">
                    <Calendar className="w-4 h-4" />
                    {experience.period}
                  </div>
                  <div className="flex items-center gap-1 justify-center md:justify-start">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-purple-600">Projet Principal</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.project}</p>
              <p className="text-gray-600 dark:text-gray-400">{experience.description}</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">Réalisations Techniques</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">Impact Métier</h4>
              <ul className="space-y-2">
                {experience.impact.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">Technologies Utilisées</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
