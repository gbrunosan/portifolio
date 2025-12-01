"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CheckCircle2, Star, Users, BookOpen } from "lucide-react"

export default function EvaluationsPage() {
    const evaluations = [
        {
            title: "Portfólio",
            description: "Anotações e Atividades",
            icon: <BookOpen className="h-8 w-8 text-blue-500" />,
            details: "Um portfólio completo contendo anotações detalhadas de todas as aulas e todas as atividades desenvolvidas durante o curso.",
        },
        {
            title: "Projeto em Trio",
            description: "Aplicação Prática",
            icon: <Users className="h-8 w-8 text-green-500" />,
            details: "Desenvolvimento de um projeto em grupo de 3 pessoas. O tema será definido pelo professor e aplicará os conhecimentos adquiridos.",
        },
        {
            title: "Atividades",
            description: "Durante o Projeto",
            icon: <CheckCircle2 className="h-8 w-8 text-purple-500" />,
            details: "Atividades práticas realizadas durante o desenvolvimento do projeto para fixação de conteúdo e acompanhamento.",
        },
        {
            title: "Pontos Extras",
            description: "Frequência e Participação",
            icon: <Star className="h-8 w-8 text-yellow-500" />,
            details: "0,5 ponto na média pela frequência nas aulas e mais 0,5 ponto pela participação na primeira aula.",
        },
    ]

    return (
        <div className="container py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
            >
                <h1 className="text-4xl font-bold tracking-tight mb-4">Avaliações</h1>
                <p className="text-xl text-muted-foreground">
                    Critérios e métodos de avaliação da disciplina de Eletiva.
                </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
                {evaluations.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="p-2 bg-muted rounded-full">{item.icon}</div>
                                <div>
                                    <CardTitle className="text-xl">{item.title}</CardTitle>
                                    <CardDescription>{item.description}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="leading-relaxed text-muted-foreground">
                                    {item.details}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
