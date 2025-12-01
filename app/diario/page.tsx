"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CalendarDays } from "lucide-react"
import Link from "next/link"

export default function DiaryPage() {
    const entries = [
        {
            date: "22/08/2024",
            title: "Primeiro Encontro - Introdução e Avaliação",
            description: "Discussão interativa sobre o desenvolvimento da disciplina e métodos de avaliação (Portfólio, Projeto em Trio, Atividades). Definição da pontuação extra por frequência e participação. Visão geral dos 4 módulos teóricos (Fundamentos, Concorrência, Frameworks, Prática) e votação sobre exercícios (10 por semana).",
            tags: ["Introdução", "Avaliação", "Planejamento"],
        },
        {
            date: "29/08/2024",
            title: "Segundo Encontro - Introdução à Linguagem",
            description: (
                <>
                    Professor ditou 25 atividades introdutórias para serem desenvolvidas em GO. Você pode conferir os códigos na página de{" "}
                    <Link href="/exercicios" className="text-primary-light hover:underline">
                        Exercícios
                    </Link>{" "}
                    e no meu{" "}
                    <a
                        href="https://github.com/gbrunosan/eletiva-exercicios"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-light hover:underline"
                    >
                        GitHub
                    </a>
                    .
                </>
            ),
            tags: ["Exercícios", "Prática"],
        },
        {
            date: "05/09/2024",
            title: "Terceiro Encontro - Características do GO",
            description: (
                <>
                    Aula sobre as principais características da linguagem: Compilada (alto desempenho), Segura (prevenção de erros), Concorrência e Tipagem forte. Exploração da documentação oficial e do site{" "}
                    <a
                        href="https://gobyexample.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-light hover:underline"
                    >
                        Go by Example
                    </a>
                    . Discussão comparativa entre GO e a linguagem favorita de cada grupo.
                </>
            ),
            tags: ["Teoria", "Características", "Documentação"],
        },
        {
            date: "12/09/2024",
            title: "Quarto Encontro - Processamento e Paralelismo",
            description: "Discussão sobre conceitos de execução paralela versus sequencial. Histórias inspiradoras sobre superação no ambiente acadêmico.",
            tags: ["Teoria", "Paralelismo"],
        },
        {
            date: "19/09/2024",
            title: "Semana da Administração",
            description: "Turma liberada para participar das atividades da Semana da Administração.",
            tags: ["Evento"],
        },
        {
            date: "26/09/2024",
            title: "Quinto Encontro - Apresentação Parcial",
            description: "Apresentação parcial do portfólio para acompanhamento do progresso.",
            tags: ["Avaliação", "Portfólio"],
        },
        {
            date: "03/10/2024",
            title: "Sexto Encontro",
            description: "Turma liberada pelo professor.",
            tags: ["Sem Aula"],
        },
        {
            date: "10/10/2024",
            title: "Sétimo Encontro - Resolução de Exercícios",
            description: (
                <>
                    Tempo dedicado para resolução da lista de exercícios e consulta ao site{" "}
                    <a
                        href="https://gobyexample.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-light hover:underline"
                    >
                        Go by Example
                    </a>
                    .
                </>
            ),
            tags: ["Prática", "Exercícios"],
        },
        {
            date: "17/10/2024",
            title: "Oitavo Encontro - Desafio PPM",
            description: "Proposta de exercício: Criar manualmente uma imagem do tipo PPM através do bloco de notas e desenvolver um código em GO para ler cada linha dessa imagem.",
            tags: ["Desafio", "PPM", "Prática"],
        },
        {
            date: "24/10/2024",
            title: "Nono Encontro - Defer vs Panic",
            description: (
                <>
                    Revisão de atributos e funções no{" "}
                    <a
                        href="https://gobyexample.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-light hover:underline"
                    >
                        Go by Example
                    </a>
                    . Tarefa de pesquisa sobre a diferença entre 'defer' e 'panic'.
                </>
            ),
            tags: ["Teoria", "Conceitos"],
        },
        {
            date: "14/11/2025",
            title: "Atividade Extracurricular",
            description: "Liberados para participar da Palestra da Consciência Negra.",
            tags: ["Evento", "Extracurricular"],
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
                <h1 className="text-4xl font-bold tracking-tight mb-4">Diário de Aula</h1>
                <p className="text-xl text-muted-foreground">
                    Registro detalhado das aulas e atividades desenvolvidas.
                </p>
            </motion.div>

            <div className="relative border-l border-muted ml-4 md:ml-6 space-y-8">
                {entries.map((entry, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-primary-light ring-4 ring-background" />
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <div className="flex items-center gap-2 text-muted-foreground mb-1 md:mb-0">
                                        <CalendarDays className="h-4 w-4" />
                                        <span className="text-sm font-medium">{entry.date}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {entry.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <CardTitle className="text-xl mt-2">{entry.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="leading-relaxed text-muted-foreground">
                                    {entry.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
