import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Master en Systèmes Distribués et Intelligence Artificielle",
      institution: "École Normale Supérieure de l'Enseignement Technique (ENSET)",
      location: "Mohammedia",
      period: "2023 - 2025",
      status: "Diplômé",
      graduationDate: "Juillet 2025",
      description: "Formation avancée en IA, systèmes distribués, et technologies émergentes",
      highlights: [
        "Spécialisation en Intelligence Artificielle",
        "Systèmes distribués et microservices",
        "Projets pratiques en Machine Learning",
        "Recherche en NLP et Computer Vision",
      ],
      grade: "Mention Très Bien",
    },
    {
      degree: "Licence en Mathématique et Informatique",
      institution: "Faculté des Sciences et Techniques (FST)",
      location: "Al-Hoceima",
      period: "2020 - 2023",
      status: "Diplômé",
      graduationDate: "Juin 2023",
      description: "Formation fondamentale en mathématiques appliquées et informatique",
      highlights: [
        "Bases solides en mathématiques",
        "Programmation et algorithmique",
        "Structures de données avancées",
        "Projet de fin d'études en développement web",
      ],
      grade: "Mention Bien",
    },
  ]

  return (
    <section
      id="education"
      className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Formation Académique
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Mon parcours académique en mathématiques, informatique et intelligence artificielle
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-lg p-[2px]">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg" />
              </div>

              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex gap-2">
                          <Badge
                            variant={edu.status === "Diplômé" ? "default" : "secondary"}
                            className={
                              edu.status === "Diplômé"
                                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0"
                                : ""
                            }
                          >
                            {edu.status}
                          </Badge>
                          {edu.grade && (
                            <Badge
                              variant="outline"
                              className="border-indigo-200 text-indigo-700 dark:border-indigo-700 dark:text-indigo-300"
                            >
                              {edu.grade}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-xl md:text-2xl mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {edu.degree}
                      </CardTitle>
                      <div className="space-y-2 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-indigo-500" />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-purple-500" />
                            <span>{edu.period}</span>
                            {edu.graduationDate && (
                              <span className="text-green-600 dark:text-green-400 font-medium ml-2">
                                • Diplômé en {edu.graduationDate}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-cyan-500" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{edu.description}</p>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Points forts & Compétences acquises
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 p-[2px] border-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Parcours Académique Accompli
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-indigo-600">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Années d'études</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Diplômes obtenus</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-cyan-600">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projets académiques</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
