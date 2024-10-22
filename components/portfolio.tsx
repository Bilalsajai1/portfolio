"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Calendar, Phone } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = ['about', 'education', 'projects', 'skills', 'contact']

  const skills = [
    { name: 'Java', level: 70 },
    { name: 'Python', level: 70 },
    { name: 'Machine Learning', level: 75 },
    { name: 'Deep Learning', level: 70 },
    { name: 'Spring Boot', level: 65 },
    { name: 'Angular', level: 65 },
    { name: 'SQL', level: 70 },
  ]

  const projects = [
    {
      title: 'Heart Disease Prediction',
      description: 'Developed a web application using Flask to predict the probability of heart disease based on patient data, achieving 89% accuracy. Utilized various classification algorithms and technologies such as Python, Flask, Pickle, HTML, and CSS.',
      date: '05/2024',
      image: '/placeholder.svg?height=200&width=300',
      github: 'https://github.com/yourusername/heart-disease-prediction'
    },
    {
      title: 'Bank Account Management Web Application',
      description: 'Developed a web application providing various banking services using Spring Boot, Hibernate, Angular, and an SQL database, ensuring robust security through Spring Security and JSON Web Token integration.',
      date: '06/2023',
      image: '/placeholder.svg?height=200&width=300',
      github: 'https://github.com/yourusername/bank-account-management'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Bilal SAJAI</h1>
        <p className="text-xl text-gray-600">Second-year Master's student in Distributed Systems and Artificial Intelligence</p>
      </header>

      <nav className="mb-8">
        <ul className="flex justify-center space-x-4">
          {sections.map((section) => (
            <li key={section}>
              <Button
                variant={activeSection === section ? 'default' : 'outline'}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <motion.main
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {activeSection === 'about' && (
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-48 h-48">
                <AvatarImage src="/placeholder.svg?height=200&width=200" alt="Bilal SAJAI" />
                <AvatarFallback>BS</AvatarFallback>
              </Avatar>
              <div>
                <p>
                  I am a student driven by a passion for AI, Machine Learning, and Software Engineering. I stand out for my ability 
                  to solve complex challenges with innovative solutions. Motivated, dynamic, and self-taught, I excel at applying 
                  my technical skills to real-world problems while contributing enthusiastically to stimulating research 
                  environments.
                </p>
                <div className="mt-4">
                  <h3 className="font-semibold">Social Skills:</h3>
                  <ul className="list-disc list-inside">
                    <li>Adaptability and Continuous Learning</li>
                    <li>Team-Oriented Collaboration</li>
                    <li>Analytical Thinking</li>
                    <li>Innovation and Curiosity</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">Languages:</h3>
                  <ul className="list-disc list-inside">
                    <li>Arabic: Native</li>
                    <li>French: Fluent</li>
                    <li>English: Fluent</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeSection === 'education' && (
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Master Degree in Distributed Systems and Artificial Intelligence</h3>
                  <p>Ecole Normale Supérieure de L'Enseignement Technique (ENSET), Mohammedia</p>
                  <p className="text-sm text-gray-500">2025 (Ongoing)</p>
                </div>
                <div>
                  <h3 className="font-semibold">Bachelor's Degree in Mathematics and Computer Science</h3>
                  <p>Faculty of Science and Technology (FST), Al-Hoceima</p>
                  <p className="text-sm text-gray-500">2023</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeSection === 'projects' && (
          <div className="space-y-6">
            {projects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.date}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-auto rounded-lg shadow-md" />
                  <p>{project.description}</p>
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeSection === 'skills' && (
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {skills.map((skill) => (
                  <li key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="w-full" />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {activeSection === 'contact' && (
          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Feel free to reach out to me through any of the following channels:</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contact.sajbilal@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(212) 679549978</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Date of Birth: 22/06/2002</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:contact.sajbilal@gmail.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/bilalsajai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/bilalsajai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.main>
    </div>
  )
}