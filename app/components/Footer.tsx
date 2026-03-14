import { siteConfig } from '@/config/site'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-10 px-6 border-t border-slate-800 bg-slate-950">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-500 text-sm">
                    &copy; {currentYear} {siteConfig.name}. All rights reserved.
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                        GitHub
                    </Link>
                    <Link
                        href={siteConfig.links.support}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                        サポートサーバー
                    </Link>
                    <Link
                        href={siteConfig.links.terms}
                        className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                        利用規約
                    </Link>
                    <Link
                        href={siteConfig.links.privacy}
                        className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                        プライバシーポリシー
                    </Link>
                </div>
            </div>
        </footer>
    )
}
