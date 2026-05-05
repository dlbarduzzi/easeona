import type { VariantProps } from "class-variance-authority"

import * as React from "react"

import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  `inline-flex items-center justify-center shrink-0 rounded-lg
  text-sm font-semibold whitespace-nowrap outline-none select-none
  focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none
  [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:ring-neutral-900 disabled:opacity-50",
      },
      size: {
        default: "h-8 px-2.5 gap-1.5",
        lg: "h-9 px-2.5 gap-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  size = "default",
  variant = "default",
  asChild = false,
  className,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
