import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#323232] text-white hover:bg-[#555555] border border-[rgba(85,85,85,0.1)] hover:border-[rgba(111,86,16,0.2)] shadow-sm hover:shadow-md transition-all duration-300",
        destructive:
          "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20",
        outline:
          "border border-[rgba(85,85,85,0.1)] hover:border-[rgba(111,86,16,0.2)] bg-transparent hover:bg-[rgba(85,85,85,0.05)]",
        secondary:
          "bg-[#0f0f0f] text-white hover:bg-[#323232] border border-[rgba(85,85,85,0.1)]",
        ghost: "hover:bg-[rgba(85,85,85,0.05)] hover:text-white",
        link: "text-white underline-offset-4 hover:underline",
        premium: "luxury-border bg-[#0f0f0f] text-white hover:bg-[#323232] hover-shine premium-glow",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-xl px-8",
        icon: "h-9 w-9 p-0",
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
