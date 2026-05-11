import Image from "next/image"

import { cn } from "@/lib/utils"

/** Dimensões reais do arquivo em /logo.png (conteúdo JPEG 1024×735). */
const LOGO_INTRINSIC = { width: 1024, height: 735 }

type BrandLogoProps = {
  priority?: boolean
  variant?: "header" | "footer"
  className?: string
}

export function BrandLogo({
  priority,
  variant = "header",
  className,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Núcleo de Saúde Bio Movimento"
      width={LOGO_INTRINSIC.width}
      height={LOGO_INTRINSIC.height}
      sizes={
        variant === "header"
          ? "(max-width: 640px) min(200px, calc(100vw - 7rem)), 220px"
          : "(max-width: 640px) min(260px, 85vw), 280px"
      }
      priority={priority}
      className={cn(
        "object-contain object-left",
        variant === "header" &&
          "h-auto max-h-11 w-auto max-w-[min(200px,calc(100vw-7rem))] sm:max-h-12 sm:max-w-[220px]",
        variant === "footer" &&
          "h-auto max-h-14 w-auto max-w-[min(260px,85vw)] sm:max-h-16 sm:max-w-[280px]",
        className
      )}
    />
  )
}
