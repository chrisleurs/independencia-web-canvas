
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 touch-manipulation",
  {
    variants: {
      variant: {
        default: "bg-hospital-primary text-white hover:bg-hospital-blue-dark shadow-lg hover:shadow-xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-hospital-primary text-hospital-primary bg-white hover:bg-hospital-primary hover:text-white transition-all duration-300",
        secondary:
          "bg-hospital-secondary text-white hover:bg-hospital-secondary/90 shadow-lg hover:shadow-xl",
        ghost: "hover:bg-hospital-blue-light hover:text-hospital-primary",
        link: "text-hospital-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3 min-h-[44px] text-sm sm:text-base", // Minimum touch target
        sm: "h-10 rounded-md px-4 min-h-[40px] text-xs sm:text-sm",
        lg: "h-13 rounded-lg px-6 sm:px-8 py-4 text-base sm:text-lg min-h-[52px]", // Better for mobile
        icon: "h-11 w-11 min-h-[44px] min-w-[44px]", // Proper touch target
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
