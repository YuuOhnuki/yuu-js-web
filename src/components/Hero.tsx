'use client'

import { BotConfig } from '@/types/bot'
import { motion } from 'framer-motion'
import { ExternalLink, MessageSquare } from 'lucide-react'

export default function Hero({ config }: { config: BotConfig }) {
    return (
        <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                    {config.id === 'yuujs' ? 'Multipurpose Bot' : 'Music Bot'}
                </span>
                <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                    {config.name}
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                    {config.tagline}
                    <br />
                    <span className="text-lg text-gray-500 font-medium">
                        {config.description}
                    </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={config.inviteLink}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
                    >
                        ボットを招待する
                        <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={config.supportServer}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all"
                    >
                        <MessageSquare size={20} />
                        サポートを受ける
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}
