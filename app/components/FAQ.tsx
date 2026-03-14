import { siteConfig } from '@/config/site'

export default function FAQ() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        よくある質問
                    </h2>
                </div>

                <div className="space-y-4">
                    {siteConfig.faq.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700"
                        >
                            <h3 className="text-lg font-bold mb-3 flex gap-3 text-slate-100">
                                <span className="text-indigo-400 flex-shrink-0">
                                    Q.
                                </span>
                                {item.question}
                            </h3>
                            <p className="text-slate-400 flex gap-3 text-sm md:text-base">
                                <span className="text-slate-500 font-bold flex-shrink-0">
                                    A.
                                </span>
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
