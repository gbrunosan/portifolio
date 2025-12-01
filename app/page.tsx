"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Code2, FileText, User } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] py-10 text-center container">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl"
      >
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">
          Portfólio de Eletiva GO
        </h1>
        <p className="text-xl text-muted-foreground">
          Documentação completa da disciplina de Eletiva de Programação em GO no IFMS.
          Acompanhe o progresso, atividades e projetos desenvolvidos.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/sobre">
              Conheça o Projeto <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/diario">
              Ver Diário de Aula
            </Link>
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full">
        {[
          {
            title: "Sobre",
            description: "Conheça o estudante e o professor.",
            icon: <User className="h-10 w-10 mb-4 text-blue-500" />,
            href: "/sobre",
          },
          {
            title: "Avaliações",
            description: "Critérios e métodos de avaliação.",
            icon: <FileText className="h-10 w-10 mb-4 text-green-500" />,
            href: "/avaliacoes",
          },
          {
            title: "Exercícios",
            description: "Resolução de problemas em GO.",
            icon: <Code2 className="h-10 w-10 mb-4 text-purple-500" />,
            href: "/exercicios",
          },
          {
            title: "Diário",
            description: "Registro cronológico das aulas.",
            icon: <BookOpen className="h-10 w-10 mb-4 text-yellow-500" />,
            href: "/diario",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="group"
          >
            <Link href={item.href}>
              <div className="flex flex-col items-center p-6 bg-card rounded-xl border shadow-sm hover:shadow-md hover:border-primary-light/50 transition-all duration-300 h-full">
                {item.icon}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-light transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
