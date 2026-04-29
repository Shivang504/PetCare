import type { ComponentProps } from "react";
import { LucideIcon } from "lucide-react";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  pill?: boolean;
  icon?: LucideIcon; // Accepts a Lucide icon component
  iconPlacement?: "left" | "right";
}

export function Button({
  variant = "primary",
  pill = false,
  icon: Icon,
  iconPlacement = "left",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-[#0f172a] text-white hover:bg-[#1e293b] shadow-sm",
    secondary: "border-2 border-[#0f172a] bg-transparent text-[#0f172a] hover:bg-[#0f172a]/5",
    ghost: "border border-slate-200 bg-white text-[#1e293b] hover:bg-slate-50 shadow-sm",
  };

  const rounded = pill ? "rounded-full" : "rounded-xl";

  return (
    <button
      type="button"
      className={`${base} cursor-pointer ${variants[variant]} ${rounded} ${className}`.trim()}
      {...props}
    >
      {/* Icon on the Left */}
      {Icon && iconPlacement === "left" && <Icon size={18} strokeWidth={2.5} />}
      
      {children}
      
      {/* Icon on the Right */}
      {Icon && iconPlacement === "right" && <Icon size={18} strokeWidth={2.5} />}
    </button>
  );
}