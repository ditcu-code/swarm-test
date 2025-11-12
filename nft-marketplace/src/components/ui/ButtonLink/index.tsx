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
}

export default function ButtonLink({
  to,
  children,
  startIcon,
  className = "",
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={
        `inline-flex items-center gap-3 h-[60px] px-[30px] py-3 rounded-[20px] ` +
        `bg-(--color-primary) text-white! font-extrabold shadow-sm ` +
        `hover:opacity-95 transition select-none ` +
        className
      }
      {...rest}
    >
      {startIcon ? (
        <span className="inline-flex items-center justify-center">{startIcon}</span>
      ) : null}
      <span>{children}</span>
    </Link>
  )
}
