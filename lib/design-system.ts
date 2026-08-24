export const layout = {
  pageMaxWidth: "1700px",
  sectionPaddingX: "px-6 lg:px-10",
  sectionGap: "gap-6",
  contentMaxWidth: "max-w-3xl",
}

export const spacing = {
  sectionY: "py-[140px]",
  sectionYLarge: "py-36",
  sectionGap: "gap-14",
  cardPadding: "1.5rem",
}

export const radius = {
  base: "20px",
  large: "28px",
  pill: "9999px",
}

// Official brand palette — matches docs/DESIGN_SYSTEM.md exactly.
// Also registered as Tailwind utilities in app/globals.css
// (bg-brand-navy, text-brand-red, bg-brand-bg, border-brand-border, ...).
export const colors = {
  navy: "#0A2247",
  red: "#D71920",
  white: "#FFFFFF",
  background: "#F8F9FB",
  lightGray: "#EEF2F6",
  border: "#E3E8EF",
  textPrimary: "#102542",
  textSecondary: "#5F6B7A",
}

export const shadows = {
  soft: "0 32px 90px rgba(0, 0, 0, 0.35)",
}

export const transitions = {
  default: "all 0.3s ease-out",
  smooth: "transition duration-300 ease-out",
}
