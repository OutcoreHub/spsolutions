import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl bg-[#323232] px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#555555] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[rgba(111,86,16,0.2)] disabled:cursor-not-allowed disabled:opacity-50 border border-[rgba(85,85,85,0.1)] hover:border-[rgba(111,86,16,0.2)] transition-colors text-white",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
