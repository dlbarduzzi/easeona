import Image from "next/image"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/config"

type AppLogoProps = React.ComponentProps<"div">

export function IconLogo({ className }: AppLogoProps) {
  return (
    <div className={cn("flex items-center shrink-0 h-8", className)}>
      <Image
        src="/images/logo-icon-dark.png"
        alt={siteConfig.name}
        width={500}
        height={500}
        className="h-full w-auto"
      />
    </div>
  )
}

export function FullLogo({ className }: AppLogoProps) {
  return (
    <div className={cn("flex items-center shrink-0 h-7", className)}>
      <Image
        src="/images/logo-full-dark.png"
        alt={siteConfig.name}
        width={500}
        height={500}
        className="h-full w-auto"
      />
    </div>
  )
}
