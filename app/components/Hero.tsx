import { siteConfig } from '@/config/site'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative px-6 py-24 md:py-32 lg:py-40 overflow-hidden">
            {/* 背景の装飾 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8 flex justify-center">
                    {/* ボットアイコン枠（後で Image タグなどに差し替え） */}
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl">
                        <span className="text-3xl md:text-5xl font-bold text-white">
                            Y
                        </span>
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {siteConfig.hero.catchphrase}
                </h1>

                <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {siteConfig.hero.subcopy}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={siteConfig.links.invite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-colors shadow-lg shadow-indigo-500/30"
                    >
                        ボットを招待する
                    </Link>
                    <Link
                        href={siteConfig.links.support}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-full transition-colors"
                    >
                        サポートサーバー
                    </Link>
                </div>
            </div>
        </section>
    )
}
