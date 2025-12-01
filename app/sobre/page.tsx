"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

export default function AboutPage() {
    return (
        <div className="container py-10 w-full max-w-[1300px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold tracking-tight mb-6">Sobre</h1>
                <p className="text-xl text-muted-foreground mb-10">
                    Conheça as pessoas por trás deste projeto e da disciplina.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="h-full">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="/placeholder-student.jpg" alt="Gerson Bruno" />
                                <AvatarFallback>GB</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-2xl">Gerson Bruno</CardTitle>
                                <CardDescription>Estudante & Desenvolvedor</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="leading-7">
                                Olá! Eu sou o Gerson Bruno, estudante do IFMS. Este portfólio foi desenvolvido para documentar meu aprendizado na eletiva de GO.
                                Aqui você encontrará meus projetos, anotações e exercícios resolvidos durante o curso.
                                (Texto para edição posterior)
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Card className="h-full">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="/placeholder-professor.jpg" alt="Alex Araújo" />
                                <AvatarFallback>AA</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-2xl">Alex Araújo</CardTitle>
                                <CardDescription>Professor da Disciplina</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="leading-7">
                                Professor Alex Araújo é o responsável pela disciplina de Eletiva de Programação em GO.
                                Com vasta experiência, ele nos guia através dos conceitos da linguagem e boas práticas de desenvolvimento.
                                (Texto para edição posterior)
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
