// One approved visual per Journal category. New articles only need a category;
// cards resolve the appropriate existing clinic asset automatically.
export const categoryImages: Record<string, string> = {
  "dental-implants": "/images/implant-treatment.webp",
  prosthodontics: "/images/veneers-showcase.webp",
  endodontics: "/images/general-dentistry.webp",
  "periodontal-care": "/images/gum-treatment.webp",
  "cosmetic-dentistry": "/images/veneers-showcase.webp",
  "childrens-dentistry": "/images/children-dentistry.webp",
  "oral-surgery": "/images/implant-treatment.webp",
  "preventive-dentistry": "/images/check-up-cleaning.webp",
}

export function getCategoryImage(category: string): string {
  return categoryImages[category] ?? "/images/general-dentistry.webp"
}
