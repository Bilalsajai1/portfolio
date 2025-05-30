"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork } from "lucide-react"
import Link from "next/link"

export function GitHubStats() {
  const githubData = {
    username: "Bilalsajai1",
    profileUrl: "https://github.com/Bilalsajai1",
    stats: {
      repositories: "21+",
      followers: "10+",
      following: "15+",
    },
    languages: [
      { name: "JavaScript", percentage: 35, color: "bg-yellow-400" },
      { name: "Python", percentage: 30, color: "bg-blue-500" },
      { name: "Java", percentage: 20, color: "bg-orange-500" },
      { name: "CSS", percentage: 10, color: "bg-purple-500" },
      { name: "Shell", percentage: 5, color: "bg-green-500" },
    ],
    featuredRepos: [
      {
        name: "AI-Projects",
        description: "Collection de projets d'Intelligence Artificielle",
        language: "Python",
        stars: 5,
        forks: 2,
      },
      {
        name: "Web-Development",
        description: "Projets de développement web avec Spring Boot et Angular",
        language: "Java",
        stars: 3,
        forks: 1,
      },
      {
        name: "Machine-Learning",
        description: "Modèles de Machine Learning et Deep Learning",
        language: "Python",
        stars: 8,
        forks: 3,
      },
    ],
  }

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">GitHub Portfolio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Découvrez mes projets open source et contributions</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* GitHub Stats */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Github className="w-8 h-8" />
                <div>
                  <CardTitle>GitHub Stats</CardTitle>
                  <Link
                    href={githubData.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    @{githubData.username}
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{githubData.stats.repositories}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Repos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{githubData.stats.followers}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{githubData.stats.following}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Following</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Langages les plus utilisés</h4>
                <div className="space-y-2">
                  {githubData.languages.map((lang, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${lang.color}`} />
                      <span className="text-sm flex-1">{lang.name}</span>
                      <span className="text-sm text-gray-500">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Featured Repositories */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold mb-6">Projets en vedette</h3>
            {githubData.featuredRepos.map((repo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-1">{repo.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{repo.description}</p>
                    </div>
                    <Link
                      href={githubData.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <Badge variant="outline">{repo.language}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href={githubData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <Github className="w-5 h-5" />
            Voir tous mes projets sur GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
