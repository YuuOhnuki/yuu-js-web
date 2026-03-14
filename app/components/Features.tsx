import { siteConfig } from '@/config/site'
import { Star, Coins, Ticket, Users, Shield, Info } from 'lucide-react'

// アイコン文字列からコンポーネントへのマッピング
const iconMap: Record<string, React.ElementType> = {
    Star,
    Coins,
    Ticket,
    Users,
    Shield,
    Info,
}

export default function Features() {
    return (
        <section className="py-20 px-6 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        主な機能
                    </h2>
                    <p className="text-slate-400">
                        コミュニティ運営に必要な機能を網羅しています。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteConfig.features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon]
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-indigo-500/50 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
                                    {IconComponent && (
                                        <IconComponent size={24} />
                                    )}
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
