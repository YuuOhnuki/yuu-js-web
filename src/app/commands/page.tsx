'use client'

import { useState } from 'react'
import commandsData from '@/data/commands.json'
import { BotType } from '@/types/bot'
import { CommandsData } from '@/types/commands'

export default function CommandsPage() {
    const [tab, setTab] = useState<BotType>('yuujs')
    const commands = (commandsData as unknown as CommandsData)[tab]

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-white pt-32 px-6 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">
                コマンド一覧
            </h1>

            <div className="flex gap-4 mb-6 justify-center">
                <button
                    onClick={() => setTab('yuujs')}
                    className={`pb-2 border-b-2 ${tab === 'yuujs' ? 'border-blue-500' : 'border-transparent'}`}
                >
                    YuuJS
                </button>
                <button
                    onClick={() => setTab('yuudj')}
                    className={`pb-2 border-b-2 ${tab === 'yuudj' ? 'border-blue-500' : 'border-transparent'}`}
                >
                    YuuDJ
                </button>
            </div>

            <div className="grid gap-4  mb-6">
                {commands.map((cmd) => (
                    <div
                        key={cmd.name}
                        className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <code className="text-blue-400 text-xl font-bold">
                                {cmd.name}
                            </code>
                            <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-400">
                                {cmd.category}
                            </span>
                        </div>
                        <p className="text-gray-300 mb-2">{cmd.description}</p>
                        <code className="text-sm text-gray-500 bg-black/30 p-2 rounded block">
                            使い方: {cmd.usage}
                        </code>
                    </div>
                ))}
            </div>
        </div>
    )
}
