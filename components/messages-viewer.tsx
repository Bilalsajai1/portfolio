"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Calendar, User, MessageSquare, Download, Trash2 } from "lucide-react"

interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  timestamp: string
  status: "sent" | "error"
}

export function MessagesViewer() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const loadMessages = () => {
      const savedMessages = JSON.parse(localStorage.getItem("contact-messages") || "[]")
      setMessages(savedMessages)
    }

    loadMessages()
    // Recharger les messages toutes les 5 secondes
    const interval = setInterval(loadMessages, 5000)
    return () => clearInterval(interval)
  }, [])

  const exportMessages = () => {
    const dataStr = JSON.stringify(messages, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = `contact-messages-${new Date().toISOString().split("T")[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const clearMessages = () => {
    if (confirm("Êtes-vous sûr de vouloir supprimer tous les messages ?")) {
      localStorage.removeItem("contact-messages")
      setMessages([])
    }
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("fr-FR")
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Messages reçus ({messages.length})
            </CardTitle>
            <div className="flex gap-2">
              <Button onClick={exportMessages} variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exporter
              </Button>
              <Button onClick={clearMessages} variant="outline" size="sm">
                <Trash2 className="w-4 h-4 mr-2" />
                Vider
              </Button>
              <Button onClick={() => setIsVisible(false)} variant="outline" size="sm">
                Fermer
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="overflow-y-auto max-h-[60vh]">
          {messages.length === 0 ? (
            <div className="text-center py-8 text-gray-500">Aucun message reçu pour le moment.</div>
          ) : (
            <div className="space-y-4">
              {messages.reverse().map((message) => (
                <Card key={message.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span className="font-semibold">{message.name}</span>
                        <Badge variant="outline">{message.email}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {formatDate(message.timestamp)}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="w-4 h-4" />
                        <span className="font-medium">{message.subject}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        {message.message}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
