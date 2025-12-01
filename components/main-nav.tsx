"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="hidden font-bold sm:inline-block">
                    Portifólio de eletiva
                </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link
                    href="/sobre"
                    className={cn(
                        "transition-colors duration-300 hover:text-primary",
                        pathname === "/sobre" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Sobre
                </Link>
                <Link
                    href="/avaliacoes"
                    className={cn(
                        "transition-colors duration-300 hover:text-primary",
                        pathname === "/avaliacoes" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Avaliações
                </Link>
                <Link
                    href="/exercicios"
                    className={cn(
                        "transition-colors duration-300 hover:text-primary",
                        pathname === "/exercicios" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Exercícios
                </Link>
                <Link
                    href="/diario"
                    className={cn(
                        "transition-colors duration-300 hover:text-primary",
                        pathname === "/diario" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Diário
                </Link>
            </nav>
        </div>
    )
}
