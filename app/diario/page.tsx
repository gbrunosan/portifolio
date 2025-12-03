"use client"

import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CalendarDays, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface DiaryEntry {
    date: string
    title: string
    description: React.ReactNode
    tags: string[]
}

const DiaryEntryCard = ({ entry }: { entry: DiaryEntry }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [showExpandButton, setShowExpandButton] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (contentRef.current) {
            // Check if the content height exceeds 275px
            // We use a slight buffer to avoid showing it for borderline cases
            if (contentRef.current.scrollHeight > 275) {
                setShowExpandButton(true)
            }
        }
    }, [])

    return (
        <Card
            className="relative overflow-hidden transition-all duration-300 hover:border-primary hover:scale-[1.005] hover:drop-shadow-md hover:-translate-y-1"
        >
            <motion.div
                ref={contentRef}
                initial={false}
                animate={{ height: isExpanded || !showExpandButton ? "auto" : 275 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1 md:mb-0">
                            <CalendarDays className="h-4 w-4" />
                            <span className="text-sm font-medium">{entry.date}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {entry.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <CardTitle className="text-xl mt-2 h-8 flex items-center">
                        {entry.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="leading-relaxed text-muted-foreground mt-2.5">
                        {entry.description}
                    </p>
                </CardContent>
            </motion.div>

            {showExpandButton && (
                <motion.div
                    role="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    initial={false}
                    animate={{
                        marginTop: isExpanded ? 16 : -80,
                        paddingTop: isExpanded ? 0 : 64,
                        paddingBottom: isExpanded ? 8 : 16
                    }}
                    className="relative z-10 flex justify-center w-full cursor-pointer group"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-transparent"
                        initial={false}
                        animate={{ opacity: isExpanded ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <button
                        className="relative z-20 flex items-center gap-1 text-sm text-primary group-hover:text-primary/80 transition-colors font-medium"
                    >
                        {isExpanded ? (
                            <>
                                Ver menos <ChevronUp className="h-4 w-4" />
                            </>
                        ) : (
                            <>
                                Ver mais <ChevronDown className="h-4 w-4" />
                            </>
                        )}
                    </button>
                </motion.div>
            )}
        </Card>
    )
}

export default function DiaryPage() {
    const entries: DiaryEntry[] = [
        {
            date: "22/08/2024",
            title: "Primeiro encontro - Introdução e avaliação",
            description: "Discussão interativa sobre o desenvolvimento da disciplina e métodos de avaliação (Portfólio, Projeto em Trio, Atividades). Definição da pontuação extra por frequência e participação. Visão geral dos 4 módulos teóricos (Fundamentos, Concorrência, Frameworks, Prática) e votação sobre exercícios (10 por semana).",
            tags: ["Introdução", "Avaliação", "Planejamento"],
        },
        {
            date: "29/08/2024",
            title: "Segundo encontro - Introdução à linguagem",
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
            title: "Terceiro encontro - Características do GO",
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
            title: "Quarto encontro - Processamento e paralelismo",
            description: "Discussão sobre conceitos de execução paralela versus sequencial. Histórias inspiradoras sobre superação no ambiente acadêmico.",
            tags: ["Teoria", "Paralelismo"],
        },
        {
            date: "19/09/2024",
            title: "Semana da administração",
            description: "Turma liberada para participar das atividades da Semana da Administração.",
            tags: ["Evento"],
        },
        {
            date: "26/09/2024",
            title: "Quinto encontro - apresentação Parcial",
            description: "Apresentação parcial do portfólio para acompanhamento do progresso.",
            tags: ["Avaliação", "Portfólio"],
        },
        {
            date: "03/10/2024",
            title: "Sexto encontro",
            description: "Turma liberada pelo professor.",
            tags: ["Sem Aula"],
        },
        {
            date: "10/10/2024",
            title: "Sétimo encontro - Resolução de exercícios",
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
            title: "Oitavo encontro - Desafio PPM",
            description: "Proposta de exercício: Criar manualmente uma imagem do tipo PPM através do bloco de notas e desenvolver um código em GO para ler cada linha dessa imagem.",
            tags: ["Desafio", "PPM", "Prática"],
        },
        {
            date: "24/10/2024",
            title: "Nono encontro - Defer vs Panic",
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
            title: "Atividade extracurricular",
            description: "Liberados para participar da Palestra da Consciência Negra.",
            tags: ["Evento", "Extracurricular"],
        },
    ]

    return (
        <div className="container py-10 px-5 md:px-10 xl:px-20">
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
                        className="relative pl-4 md:pl-12"
                    >
                        <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-primary-light ring-4 ring-background" />
                        <DiaryEntryCard entry={entry} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
