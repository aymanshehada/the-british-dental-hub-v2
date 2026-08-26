import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

// Locale-aware drop-in replacements for next/link and next/navigation.
// Existing href strings (e.g. "/treatments", "/#contact", "#implant-journey")
// keep working unchanged — this only adds the /ar prefix when needed.
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
