import type React from "react"

/**
 * COURSE LAYOUT
 * Nested layout for /course routes
 * Inherits all styles and fonts from root layout
 */
export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
