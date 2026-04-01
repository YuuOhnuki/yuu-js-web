'use client'

import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'

export default function TosPage() {
    const lastUpdated = '2026年4月1日'

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500">
                        <Scale size={28} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">利用規約</h1>
                        <p className="text-gray-500 text-sm">
                            最終更新日: {lastUpdated}
                        </p>
                    </div>
                </div>

                <div className="space-y-12 text-gray-300 leading-relaxed bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-sm">
                    <section>
                        <p>
                            この利用規約（以下「本規約」といいます）は、「YuuJS」および「YuuDJ」（以下、総称して「本ボット」といいます）の利用条件を定めるものです。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                            第1条（同意）
                        </h2>
                        <p>
                            利用者は、本ボットを自身のサーバーに導入、または本ボットの機能を利用することで、本規約およびDiscord,
                            Inc.が定める利用規約に同意したものとみなされます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                            第2条（禁止事項）
                        </h2>
                        <p className="mb-4">
                            利用者は、本ボットの利用にあたり、以下の行為を行ってはなりません。
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                本ボットの不具合を意図的に利用する行為、または悪用する行為。
                            </li>
                            <li>
                                本ボットの運営や配信を妨害する行為（スパム行為、過度な負荷をかける行為など）。
                            </li>
                            <li>Discordの利用規約に違反する行為。</li>
                            <li>
                                他の利用者、第三者、または運営者の権利を侵害する行為。
                            </li>
                            <li>その他、運営者が不適切と判断した行為。</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                            第3条（サービスの提供停止・変更）
                        </h2>
                        <p className="mb-4">
                            運営者は、利用者に事前通知することなく、本ボットの全部または一部の提供を中断、停止、または変更することができるものとします。
                        </p>
                        <p>
                            運営者は、本条に基づき行われた措置によって利用者に生じた損害について、一切の責任を負いません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                            第4条（免責事項）
                        </h2>
                        <p className="mb-4">
                            本ボットは「現状有姿」で提供され、運営者はその完全性、正確性、有用性についていかなる保証も行いません。
                        </p>
                        <p>
                            本ボットの利用により利用者または第三者に生じた損害（データの消失、サーバーの混乱、精神的苦痛など）について、運営者は一切の責任を負わないものとします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                            第5条（規約の変更）
                        </h2>
                        <p>
                            運営者は、運営者の判断により、いつでも本規約を変更することができるものとします。変更後の規約は、本ボットが参加するサーバー内、または指定のウェブサイトに掲示された時点から効力を生じるものとします。
                        </p>
                    </section>
                </div>
            </motion.div>
        </main>
    )
}
