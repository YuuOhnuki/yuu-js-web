import { siteConfig } from '@/config/site'

export default function Steps() {
    return (
        <section className="py-20 px-6 bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        導入手順
                    </h2>
                    <p className="text-slate-400">
                        簡単なステップで、すぐに使い始めることができます。
                    </p>
                </div>

                <div className="space-y-6">
                    {siteConfig.steps.map((step) => (
                        <div
                            key={step.step}
                            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center p-6 rounded-2xl bg-slate-800 border border-slate-700"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xl shadow-lg shadow-indigo-600/20">
                                {step.step}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1 text-slate-100">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400 text-sm md:text-base">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
