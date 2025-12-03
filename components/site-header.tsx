import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"

import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 justify-center flex">
            <div className="justify-between w-full flex h-14 items-center">
                <MobileNav />
                <MainNav />
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search or other items can go here */}
                    </div>
                    <AnimatedThemeToggler />
                </div>
            </div>
        </header>
    )
}
