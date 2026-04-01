'use client'

import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                        Y
                    </div>
                    <span className="font-bold text-xl tracking-tight">
                        YuuJS & YuuDJ
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <Link
                        href="/"
                        className="hover:text-white transition-colors"
                    >
                        ホーム
                    </Link>
                    <Link
                        href="/commands"
                        className="hover:text-white transition-colors"
                    >
                        コマンド
                    </Link>
                    <Link
                        href="/terms"
                        className="hover:text-white transition-colors"
                    >
                        利用規約
                    </Link>
                    <Link
                        href="/privacy"
                        className="hover:text-white transition-colors"
                    >
                        プライバシー
                    </Link>
                </div>

                <Link
                    href="https://discord.gg/example"
                    className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-semibold transition-all active:scale-95"
                >
                    サポートサーバー
                </Link>
            </div>
        </nav>
    )
}
