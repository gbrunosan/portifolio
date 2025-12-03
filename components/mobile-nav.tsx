"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Code2, FileText, Home, Menu, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
    {
        title: "Home",
        href: "/",
        icon: Home,
    },
    {
        title: "Sobre",
        href: "/sobre",
        icon: User,
    },
    {
        title: "Avaliações",
        href: "/avaliacoes",
        icon: FileText,
    },
    {
        title: "Exercícios",
        href: "/exercicios",
        icon: Code2,
    },
    {
        title: "Diário",
        href: "/diario",
        icon: BookOpen,
    },
]

export function MobileNav() {
    const [open, setOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <SheetHeader className="px-4">
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 pr-6">
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <MobileLink
                                key={item.href}
                                href={item.href}
                                onOpenChange={setOpen}
                                className={cn(
                                    "flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200",
                                    pathname === item.href
                                        ? "bg-primary/15 text-primary font-semibold"
                                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                )}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.title}
                            </MobileLink>
                        ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

interface MobileLinkProps extends React.ComponentProps<typeof Link> {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) {
    return (
        <Link
            href={href}
            onClick={() => {
                onOpenChange?.(false)
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    )
}
