"use client"

import { AuroraText } from "@/components/ui/aurora-text"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

export default function AboutPage() {
    return (
        <div className="container py-10 px-5 md:px-10 xl:px-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold tracking-tight mb-6">Sobre</h1>
                <p className="text-xl text-muted-foreground mb-10">
                    Somos do Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul (IFMS).
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="h-full"
                >
                    <Card className="h-full border-primary/20 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 flex flex-col items-center text-center p-6">
                        <CardHeader className="flex flex-col items-center gap-4 p-0 mb-4 w-full">
                            <CardTitle className="text-3xl text-primary">
                                <AuroraText>
                                    Gerson Bruno
                                </AuroraText>
                            </CardTitle>
                            <Avatar className="h-40 w-40 border-4 border-primary/20">
                                <AvatarImage src="/gerson.png" alt="Gerson Bruno" className="object-cover" />
                                <AvatarFallback>GB</AvatarFallback>
                            </Avatar>
                            <CardDescription className="text-xl font-medium text-foreground">Estudante & Desenvolvedor Front-end</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 mt-2">
                            <p className="leading-7 text-lg text-muted-foreground">
                                Estudante do IFMS e Desenvolvedor Front-end Pleno. Um grande fã da área e apaixonado por jogos.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="h-full"
                >
                    <Card className="h-full border-primary/20 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 flex flex-col items-center text-center p-6 ">
                        <CardHeader className="flex flex-col items-center gap-4 p-0 mb-4 w-full">
                            <CardTitle className="text-3xl text-primary">
                                <AuroraText colors={["#22c5adff", "#3b82f6", "#10b9abff", "#0ea5e9"]}>
                                    Alex Araújo
                                </AuroraText>
                            </CardTitle>
                            <Avatar className="h-40 w-40 border-4 border-primary/20">
                                <AvatarImage src="/alex.png" alt="Alex Araújo" className="object-cover" />
                                <AvatarFallback>AA</AvatarFallback>
                            </Avatar>
                            <CardDescription className="text-xl font-medium text-foreground">Professor Mestre & Coordenador</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 mt-2">
                            <p className="leading-7 text-lg text-muted-foreground">
                                Professor Mestre do IFMS e Coordenador de Engenharia da Computação. Ministra a disciplina de Eletiva, ama Visão Computacional e não dispensa um churrasco com os orientandos.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
