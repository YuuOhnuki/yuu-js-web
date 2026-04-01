'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        q: '利用は無料ですか？',
        a: 'はい、基本機能はすべて無料でご利用いただけます。',
    },
    {
        q: '導入に管理者権限は必要ですか？',
        a: 'コマンドの実行には適切な権限が必要ですが、ボット追加時に必要な権限を確認できます。',
    },
    {
        q: '日本語に対応していますか？',
        a: 'はい、コマンドの説明やメッセージはすべて日本語に対応しています。',
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="max-w-3xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold mb-12 text-center">
                よくある質問
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className="border border-white/10 rounded-2xl overflow-hidden"
                    >
                        <button
                            onClick={() =>
                                setOpenIndex(openIndex === i ? null : i)
                            }
                            className="w-full flex items-center justify-between p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors text-left"
                        >
                            <span className="font-semibold">{faq.q}</span>
                            <ChevronDown
                                className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                            />
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden bg-white/[0.01]"
                                >
                                    <p className="p-6 text-gray-400 border-t border-white/5 leading-relaxed">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    )
}
