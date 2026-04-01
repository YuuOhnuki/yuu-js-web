'use client'

import { DetailedFeature } from '@/types/bot'
import { motion } from 'framer-motion'

export default function FeatureDetails({
    details,
}: {
    details: DetailedFeature[]
}) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 space-y-32">
            {details.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                >
                    {/* テキスト側 */}
                    <div className="flex-1 space-y-6">
                        <span className="text-blue-500 font-mono font-bold tracking-widest">
                            {item.step}
                        </span>
                        <h2 className="text-4xl font-extrabold">
                            {item.title}
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {item.description}
                        </p>
                    </div>

                    {/* 画像/UI側 */}
                    <div className="flex-1 w-full">
                        <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group">
                            {/* 装飾的なグラデーション */}
                            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* 実際の画像がある場合は Image タグ、ない場合はダミー */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold italic">
                                {/* <Image src={item.image} alt={item.title} fill className="object-cover" /> */}
                                [ UI SCREENSHOT: {item.title} ]
                            </div>

                            {/* Discord風のUIパーツを模した装飾 */}
                            <div className="absolute top-4 left-4 right-4 h-6 bg-white/5 rounded-full flex items-center px-3 gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </section>
    )
}
