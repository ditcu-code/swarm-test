import React from "react"
import { Link } from "react-router-dom"

export type ButtonLinkProps = Omit<
  React.ComponentProps<typeof Link>,
  "to" | "children" | "className"
> & {
  to: string
  children: React.ReactNode
  startIcon?: React.ReactNode
  className?: string
  narrow?: boolean
}

export default function ButtonLink({
  to,
  children,
  startIcon,
  className = "",
  narrow = false,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={
        `inline-flex items-center gap-3 h-15 ${
          narrow ? "px-7.5" : "px-12.5"
        } py-3 rounded-[20px] ` +
        `bg-(--color-primary) text-white! font-extrabold shadow-sm ` +
        `hover:opacity-90 transition select-none ` +
        className
      }
      {...rest}
    >
      {startIcon ? (
        <span className="inline-flex items-center justify-center w-5 h-5">{startIcon}</span>
      ) : null}
      <span>{children}</span>
    </Link>
  )
}
