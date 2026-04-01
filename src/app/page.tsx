'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BotType, BotConfig } from '@/types/bot'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import FeatureDetails from '@/components/FeatureDetails'
import ScreenshotShowcase from '@/components/ScreenshotShowcase'
import FAQ from '@/components/FAQ'

const BOT_DATA: Record<BotType, BotConfig> = {
    yuujs: {
        id: 'yuujs',
        name: 'YuuJS',
        tagline: '日本語コミュニティのための多機能 Discord ボット',
        description: 'レベリング・経済・チケット・管理コマンドをこれひとつで。',
        inviteLink: process.env.NEXT_PUBLIC_YUUJS_INVITE_URL || '#',
        supportServer: process.env.NEXT_PUBLIC_SUPPORT_SERVER_URL || '#',
        features: [
            {
                title: 'レベリング',
                description: 'メッセージに応じてXPを付与。',
                icon: 'BarChart',
            },
            {
                title: 'チケット管理',
                description: 'ボタン一つでサポート窓口を開設。',
                icon: 'Ticket',
            },
            {
                title: 'モデレーション',
                description: 'サーバーの安全を守る管理機能。',
                icon: 'ShieldCheck',
            },
        ],
        screenshots: ['/sc1.png', '/sc2.png', '/sc3.png'],
        detailedFeatures: [
            {
                step: 'STEP 01',
                title: '簡単設定のロールパネル',
                description:
                    'コマンド一つでボタン式のロールパネルを作成。ユーザーはクリックするだけで役職を受け取れます。',
                image: '/role.png',
            },
            {
                step: 'STEP 02',
                title: '高度なチケットシステム',
                description:
                    '問い合わせ内容に応じて自動的にチャンネルを作成し、スタッフに通知。スムーズなサポートを可能にします。',
                image: '/ticket.png',
            },
        ],
    },
    yuudj: {
        id: 'yuudj',
        name: 'Yuu DJ',
        tagline: 'もっとシンプルに、もっと使いやすく。',
        description:
            '高品質な音楽再生と、直感的なボタン操作を提供する音楽特化ボット。',
        inviteLink: process.env.NEXT_PUBLIC_YUUDJ_INVITE_URL || '#',
        supportServer: process.env.NEXT_PUBLIC_SUPPORT_SERVER_URL || '#',
        features: [
            {
                title: '高品質再生',
                description: 'YouTube等のストリーミングに対応。',
                icon: 'Music',
            },
            {
                title: '直感UI',
                description: 'ボタン操作でコマンドいらず。',
                icon: 'MousePointer2',
            },
            {
                title: 'フィルター',
                description: 'Nightcore等を即座に適用。',
                icon: 'Sliders',
            },
        ],
        screenshots: ['/dj1.png', '/dj2.png'],
        detailedFeatures: [
            {
                step: 'CONTROL',
                title: 'ボタンによる直感操作',
                description:
                    '再生中のメッセージに表示されるボタンで、スキップ、一時停止、ループが自由自在。',
                image: '/player.png',
            },
            {
                step: 'SOUND',
                title: 'リアルタイムフィルター',
                description:
                    '低音ブーストやスピード調整など、音楽を自分好みにリアルタイムでカスタマイズ。',
                image: '/filter.png',
            },
        ],
    },
}

export default function HomePage() {
    const [activeBot, setActiveBot] = useState<BotType>('yuujs')

    return (
        <main className="min-h-screen bg-[#050505]">
            {/* Tab Switcher */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-1.5 rounded-2xl flex gap-2 shadow-2xl">
                    {(['yuujs', 'yuudj'] as BotType[]).map((bot) => (
                        <button
                            key={bot}
                            onClick={() => setActiveBot(bot)}
                            className={`px-6 py-3 rounded-xl font-bold transition-all ${
                                activeBot === bot
                                    ? 'bg-blue-600 text-white'
                                    : 'hover:bg-white/5 text-gray-400'
                            }`}
                        >
                            {bot === 'yuujs' ? 'Utility' : 'Music'}
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeBot}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Hero config={BOT_DATA[activeBot]} />
                    <Features features={BOT_DATA[activeBot].features} />
                    <ScreenshotShowcase
                        screenshots={BOT_DATA[activeBot].screenshots}
                    />
                    <FeatureDetails
                        details={BOT_DATA[activeBot].detailedFeatures}
                    />
                    <FAQ />
                </motion.div>
            </AnimatePresence>
        </main>
    )
}
