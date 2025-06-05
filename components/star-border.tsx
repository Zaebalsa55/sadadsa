"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import type { JSX } from "react"

interface StarBorderProps {
  children: ReactNode
  className?: string
  color?: string
  speed?: string
  as?: keyof JSX.IntrinsicElements
}

export function StarBorder({
  children,
  className = "",
  color = "cyan",
  speed = "8s",
  as: Component = "div",
}: StarBorderProps) {
  const colorMap = {
    cyan: "#06b6d4",
    blue: "#3b82f6",
    purple: "#8b5cf6",
    pink: "#ec4899",
    green: "#1B6568",
  }

  const borderColor = colorMap[color as keyof typeof colorMap] || colorMap.cyan

  return (
    <Component className={`relative overflow-hidden ${className}`}>
      {/* Статичная белая граница */}
      <div className="absolute inset-0 rounded-xl border-2 border-white bg-white"></div>

      {/* Анимированная зеленая граница */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2"
        style={{
          borderImage: `linear-gradient(90deg, transparent, ${borderColor}, transparent) 1`,
          background: `linear-gradient(90deg, transparent, ${borderColor}, transparent)`,
          backgroundSize: "200% 100%",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "2px",
        }}
        animate={{
          backgroundPosition: ["200% 0%", "-200% 0%"],
        }}
        transition={{
          duration: Number.parseFloat(speed),
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <div className="relative z-10 m-[2px] rounded-xl bg-white h-full">{children}</div>
    </Component>
  )
}
