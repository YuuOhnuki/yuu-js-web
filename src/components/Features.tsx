'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

interface Feature {
    title: string
    description: string
    icon: string
}

export default function Features({ features }: { features: Feature[] }) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold mb-12 text-center">主な機能</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                    // 文字列のアイコン名をコンポーネントに変換
                    const IconComponent =
                        (Icons as unknown as Record<string, LucideIcon>)[
                            feature.icon
                        ] || Icons.Zap

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                                <IconComponent size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
