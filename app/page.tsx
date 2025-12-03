"use client"

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { AuroraText } from "@/components/ui/aurora-text"
import { Button } from "@/components/ui/button"
import { MagicCard } from "@/components/ui/magic-card"
import { Meteors } from "@/components/ui/meteors"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { TextAnimate } from "@/components/ui/text-animate"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Code2, FileText, User } from "lucide-react"
import Link from "next/link"

import { IconCloudDemo } from "@/components/icon-cloud-demo"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col w-full relative">
      <div
        className="fixed inset-0 z-[60] pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Hero Section */}
      <div className="flex flex-col flex-1 items-center lg:justify-center min-h-[calc(100vh-3.5rem)] pb-10 lg:py-10 text-center relative overflow-hidden">
        
        <Meteors minDuration={2} maxDuration={16} className="hidden lg:block" />

        <div className="relative w-full flex justify-center items-center mb-10 z-10">
          <motion.img
            src="/computer.webp"
            alt="Computer"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 1,
              y: [0, -25, 0]
            }}
            transition={{
              opacity: { duration: 0.8, delay: 1.5 },
              y: {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }
            }}
            className="hidden lg:block absolute left-0 xl:left-10 top-12 w-64 h-auto object-contain -z-10"
          />



          <motion.div
            initial={{ opacity: 0, y: -120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="space-y-4 md:space-y-6 max-w-xs sm:max-w-lg lg:max-w-xl xl:max-w-2xl relative z-10 rounded-xl"
          >
            <div className="lg:hidden flex justify-center">
              <IconCloudDemo size={215} className="lg:hidden " />
            </div>
            <AuroraText className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary pb-2">
              Portfólio de Eletiva
            </AuroraText>
            <TextAnimate animation="slideUp" by="word" duration={0.5} as="p">
              Documentação completa da disciplina de Eletiva de Programação em GO no IFMS.
            </TextAnimate>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
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

          <motion.img
            src="/note.webp"
            alt="Notebook"
            initial={{ opacity: 0, x: 150, y: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 50, 0]
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.6 },
              x: { duration: 0.8, delay: 0.6 },
              y: {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
              }
            }}
            className="hidden lg:block absolute right-0 xl:right-10 -top-12 w-64 h-auto object-contain -z-10"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 3 }}
          className="absolute bottom-16 md:bottom-20 animate-bounce cursor-pointer z-20"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-muted-foreground text-sm">Role para ver mais</span>
        </motion.div>

      </div>

      {/* Navigation Grid Section */}
      <div className="min-h-screen flex flex-col items-center justify-center w-full py-20 bg-gradient-to-b from-background to-primary/30 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-background/5 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-6"
        >
          {[
            {
              title: "Sobre",
              description: "Conheça o estudante e o professor.",
              icon: <User className="h-12 w-12 mb-6 text-blue-500" />,
              href: "/sobre",
              gradient: "from-blue-500/20 to-blue-500/5"
            },
            {
              title: "Avaliações",
              description: "Critérios e métodos de avaliação.",
              icon: <FileText className="h-12 w-12 mb-6 text-green-500" />,
              href: "/avaliacoes",
              gradient: "from-green-500/20 to-green-500/5"
            },
            {
              title: "Exercícios",
              description: "Resolução de problemas em GO.",
              icon: <Code2 className="h-12 w-12 mb-6 text-purple-500" />,
              href: "/exercicios",
              gradient: "from-purple-500/20 to-purple-500/5"
            },
            {
              title: "Diário",
              description: "Registro cronológico das aulas.",
              icon: <BookOpen className="h-12 w-12 mb-6 text-yellow-500" />,
              href: "/diario",
              gradient: "from-yellow-500/20 to-yellow-500/5"
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <Link href={item.href} className="block h-full">
                <MagicCard
                  className="h-[250px] rounded-md p-10 text-center cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-[1.02]"
                  gradientColor="var(--primary-dark)"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    {item.icon}
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </div>
                </MagicCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
