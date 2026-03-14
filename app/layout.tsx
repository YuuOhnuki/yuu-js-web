import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: `${siteConfig.name} | もっとシンプルに、もっと使いやすく`,
    description: siteConfig.description,
    openGraph: {
        title: `${siteConfig.name} | もっとシンプルに、もっと使いやすく`,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
        locale: 'ja_JP',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja" className="scroll-smooth">
            <body
                className={`${inter.className} bg-slate-950 text-slate-50 min-h-screen flex flex-col`}
            >
                {children}
            </body>
        </html>
    )
}
