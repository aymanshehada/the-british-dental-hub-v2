const IMAGE_DIR = "/images/patient-stories"

type CaseImage = { src: string; width: number; height: number }

export type PatientCase = {
  slug: string
  smile: { before: CaseImage; after: CaseImage }
  closeup: { before: CaseImage; after: CaseImage }
}

// Photographs are the BDH Journal's final crops (mouth and teeth only),
// resized for the web and otherwise unaltered. Each pair is a matched view.
export const patientCases: PatientCase[] = [
  {
    slug: "health-first-crown-restoration",
    smile: {
      before: { src: `${IMAGE_DIR}/crowns-before-smile.jpg`, width: 2000, height: 834 },
      after: { src: `${IMAGE_DIR}/crowns-after-smile.jpg`, width: 2000, height: 834 },
    },
    closeup: {
      before: { src: `${IMAGE_DIR}/crowns-before-closeup.jpg`, width: 1468, height: 735 },
      after: { src: `${IMAGE_DIR}/crowns-after-closeup.jpg`, width: 2000, height: 1000 },
    },
  },
]

export function getPatientCase(slug: string): PatientCase | undefined {
  return patientCases.find((patientCase) => patientCase.slug === slug)
}
