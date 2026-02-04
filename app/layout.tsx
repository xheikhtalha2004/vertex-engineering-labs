import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Vertex Engineering Labs | Engineering Solvency at Scale',
    description: 'High-fidelity CAD, computational validation, and rapid prototyping for B2B manufacturers. CFD, FEA, thermal analysis, and DFM expertise.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black" suppressHydrationWarning>
                {children}
            </body>
        </html>
    )
}
