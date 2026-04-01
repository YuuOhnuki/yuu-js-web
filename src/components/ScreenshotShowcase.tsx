'use client'

import { motion } from 'framer-motion'

export default function ScreenshotShowcase({
    screenshots,
}: {
    screenshots: string[]
}) {
    return (
        <section className="py-24 bg-white/[0.01] border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-3xl font-bold text-center">
                    UI ギャラリー
                </h2>
                <p className="text-gray-500 text-center mt-2">
                    直感的で使いやすいインターフェースを提供します
                </p>
            </div>

            <div className="flex gap-6 px-6 overflow-x-auto pb-8 no-scrollbar">
                {screenshots.map((src, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/3] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white/10 text-sm font-mono overflow-hidden relative"
                    >
                        {/* ここにボットの実際のメッセージ画像などを配置 */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <span className="text-white/60 text-xs">
                                Discord UI Preview #{i + 1}
                            </span>
                        </div>
                        [ Screenshot Placeholder ]
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
