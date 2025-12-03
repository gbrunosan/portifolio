import { IconCloud } from "@/components/ui/icon-cloud"
import { cn } from "@/lib/utils"

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
]

export function IconCloudDemo({ className, size = 400 }: { className?: string, size?: number }) {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
    )

    return (
        <div className={cn("relative flex size-full max-w-lg items-center justify-center overflow-hidden p-4", className)}>
            <IconCloud images={images} width={size} height={size} iconSize={25} />
        </div>
    )
}
