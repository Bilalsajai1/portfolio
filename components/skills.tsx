import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Code, Database, Globe, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Intelligence Artificielle & ML",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 75, logo: "🐍" },
        { name: "Machine Learning", level: 90, logo: "🤖" },
        { name: "Deep Learning", level: 85, logo: "🧠" },
        { name: "NLP", level: 88, logo: "💬" },
        { name: "Computer Vision", level: 82, logo: "👁️" },
      ],
      technologies: [
        { name: "PyTorch", logo: "⚡" },
        { name: "TensorFlow", logo: "🔥" },
        { name: "Scikit-learn", logo: "🤖" },
        { name: "Keras", logo: "🧠" },
        { name: "spaCy", logo: "💬" },
        { name: "BERT", logo: "🤗" },
        { name: "Transformers", logo: "🔄" },
        { name: "OpenCV", logo: "👁️" },
        { name: "Pandas", logo: "🐼" },
        { name: "NumPy", logo: "🔢" },
      ],
    },
    {
      title: "Développement Web",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Java/Spring Boot", level: 85, logo: "☕" },
        { name: "Angular", level: 80, logo: "🅰️" },
        { name: "JavaScript", level: 75, logo: "🟨" },
        { name: "REST APIs", level: 88, logo: "🔗" },
        { name: "HTML/CSS", level: 85, logo: "🌐" },
      ],
      technologies: [
        { name: "Spring Boot", logo: "🍃" },
        { name: "Angular", logo: "🅰️" },
        { name: "Flask", logo: "🌶️" },
        { name: "Hibernate", logo: "💾" },
        { name: "JavaScript", logo: "🟨" },
        { name: "HTML5", logo: "🌐" },
        { name: "CSS3", logo: "🎨" },
        { name: "REST", logo: "🔗" },
        { name: "GraphQL", logo: "📊" },
      ],
    },
    {
      title: "Bases de Données",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "MySQL", level: 85, logo: "🐬" },
        { name: "PostgreSQL", level: 70, logo: "🐘" },
        { name: "Modélisation", level: 90, logo: "📊" },
      ],
      technologies: [
        { name: "MySQL", logo: "🐬" },
        { name: "PostgreSQL", logo: "🐘" },
        { name: "Hibernate", logo: "💾" },
        { name: "JPA", logo: "☕" },
      ],
    },
    {
      title: "Outils & Technologies",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git/GitHub", level: 90, logo: "🐙" },
        { name: "Docker", level: 65, logo: "🐳" },
      ],
      technologies: [
        { name: "Git", logo: "🔀" },
        { name: "GitHub", logo: "🐙" },
        { name: "Docker", logo: "🐳" },
      ],
    },
  ]

  const languages = [
    { name: "Arabe", level: "Langue maternelle", flag: "🇲🇦" },
    { name: "Français", level: "Intermédiaire (B2)", flag: "🇫🇷" },
    { name: "Anglais", level: "Courant (B2-C1)", flag: "🇺🇸" },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Compétences Techniques</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Mon expertise technique couvre l'IA, le développement web et les systèmes distribués
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span>{skill.logo}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies & Frameworks :</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs flex items-center gap-1">
                        <span>{tech.logo}</span>
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages Section */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Langues</CardTitle>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="text-2xl mb-2">{lang.flag}</div>
                  <div className="font-semibold">{lang.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
