// One approved visual per Journal category. New articles only need a category;
// cards resolve the appropriate existing clinic asset automatically.
export const categoryImages: Record<string, string> = {
  "dental-implants": "/images/implant-treatment.png",
  prosthodontics: "/images/veneers-showcase.png",
  endodontics: "/images/general-dentistry.png",
  "periodontal-care": "/images/gum-treatment.png",
  "cosmetic-dentistry": "/images/veneers-showcase.png",
  "childrens-dentistry": "/images/children-dentistry.png",
  "oral-surgery": "/images/implant-treatment.png",
  "preventive-dentistry": "/images/check-up-cleaning.png",
}

export function getCategoryImage(category: string): string {
  return categoryImages[category] ?? "/images/general-dentistry.png"
}
