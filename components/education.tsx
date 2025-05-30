import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Master en Systèmes Distribués et Intelligence Artificielle",
      institution: "École Normale Supérieure de l'Enseignement Technique (ENSET)",
      location: "Mohammedia",
      period: "2023 - 2025",
      status: "En cours",
      description: "Formation avancée en IA, systèmes distribués, et technologies émergentes",
      highlights: [
        "Spécialisation en Intelligence Artificielle",
        "Systèmes distribués et microservices",
        "Projets pratiques en Machine Learning",
        "Recherche en NLP et Computer Vision",
      ],
    },
    {
      degree: "Licence en Mathématique et Informatique",
      institution: "Faculté des Sciences et Techniques (FST)",
      location: "Al-Hoceima",
      period: "2020 - 2023",
      status: "Diplômé",
      description: "Formation fondamentale en mathématiques appliquées et informatique",
      highlights: [
        "Bases solides en mathématiques",
        "Programmation et algorithmique",
        "Structures de données avancées",
        "Projet de fin d'études en développement web",
      ],
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Formation</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Mon parcours académique en mathématiques, informatique et intelligence artificielle
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

              <CardHeader className="pl-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <Badge variant={edu.status === "En cours" ? "default" : "secondary"}>{edu.status}</Badge>
                    </div>
                    <CardTitle className="text-xl md:text-2xl mb-2 text-blue-600">{edu.degree}</CardTitle>
                    <div className="space-y-1 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pl-8 space-y-4">
                <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>

                <div>
                  <h4 className="font-semibold mb-3">Points forts :</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
