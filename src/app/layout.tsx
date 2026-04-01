import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Yuu Bot Series - The Best Discord Experience',
    description: 'Multipurpose and Music bots for your Discord community.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja" className="dark">
            <body
                className={`${inter.className} bg-[#050505] text-white antialiased`}
            >
                {/* 背景の装飾 */}
                <div className="fixed inset-0 z-[-1]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full" />
                </div>

                <Navbar />
                <div className="min-h-screen">{children}</div>
                <Footer />
            </body>
        </html>
    )
}
