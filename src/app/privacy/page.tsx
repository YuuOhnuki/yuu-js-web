'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export default function PrivacyPage() {
    const lastUpdated = '2026年4月1日'

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-green-600/20 rounded-2xl flex items-center justify-center text-green-500">
                        <ShieldCheck size={28} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">
                            プライバシーポリシー
                        </h1>
                        <p className="text-gray-500 text-sm">
                            最終更新日: {lastUpdated}
                        </p>
                    </div>
                </div>

                <div className="space-y-12 text-gray-300 leading-relaxed bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-sm">
                    <section>
                        <p>
                            Discordボット「YuuJS」および「YuuDJ」（以下「本ボット」といいます）において、利用者の情報を以下の通り取り扱います。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
                            1. 取得する情報
                        </h2>
                        <p className="mb-4">
                            本ボットは、サービスの提供にあたり、Discord
                            APIを通じて以下の情報を取得する場合があります。
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                ユーザー識別子（ユーザー名、ユーザーID、アバター画像）
                            </li>
                            <li>
                                サーバー識別子（サーバー名、サーバーID、チャンネル名、チャンネルID）
                            </li>
                            <li>実行されたコマンドの内容および履歴</li>
                            <li>
                                （YuuDJにおいて）ボイスチャンネルへの接続状態および音声再生に関する設定情報
                            </li>
                        </ul>
                        <p className="mt-4 text-sm bg-white/5 p-4 rounded-xl border border-white/5">
                            ※本ボットが、ユーザーのメッセージ内容や通話内容を恒久的に録音・保存することはありません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
                            2. 利用目的
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>本ボットの機能提供および運営</li>
                            <li>
                                不具合の修正、パフォーマンス向上のための分析
                            </li>
                            <li>荒らし行為や不正利用の防止</li>
                            <li>利用者からの問い合わせへの対応</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
                            3. 情報の管理と第三者提供
                        </h2>
                        <p className="mb-4">
                            運営者は、取得した情報を適切に管理し、次の場合を除き第三者に提供することはありません。
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>利用者の同意がある場合</li>
                            <li>法令に基づく開示要請があった場合</li>
                            <li>
                                サービス運営に必要な範囲で業務委託先に開示する場合
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
                            4. データの削除依頼
                        </h2>
                        <p>
                            利用者が本ボットによるデータの保持を希望しない場合、サーバーから本ボットをキック（追放）または
                            BAN するか、ゆう（ID: 1481224294150180935）
                            までご連絡ください。依頼に基づき、合理的な範囲で速やかにデータを削除いたします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
                            5. 適用範囲
                        </h2>
                        <p>
                            本ポリシーは「YuuJS」および「YuuDJ」に共通して適用されます。また、本ボットはDiscordのプラットフォームを利用しているため、Discord,
                            Inc.のプライバシーポリシーも併せて適用されます。
                        </p>
                    </section>
                </div>
            </motion.div>
        </main>
    )
}
