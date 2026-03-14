export default function Screenshots() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        直感的なインターフェース
                    </h2>
                    <p className="text-slate-400">
                        ユーザーが迷わない使いやすいUIを提供します。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* スクリーンショット1 のプレースホルダー */}
                    <div className="rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden aspect-video flex items-center justify-center shadow-lg relative group">
                        {/* 実際には Next.js の Image コンポーネントに差し替えます */}
                        {/* <Image src="/screenshots/rolepanel.png" alt="ロールパネル" fill className="object-cover" /> */}
                        <div className="text-center p-6 text-slate-500">
                            <div className="text-5xl mb-3">🎭</div>
                            <p className="font-medium text-slate-300">
                                ロールパネルのUIイメージ
                            </p>
                            <p className="text-xs mt-2 text-slate-600">
                                /public/screenshots/... に配置
                            </p>
                        </div>
                    </div>

                    {/* スクリーンショット2 のプレースホルダー */}
                    <div className="rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden aspect-video flex items-center justify-center shadow-lg relative group">
                        <div className="text-center p-6 text-slate-500">
                            <div className="text-5xl mb-3">🎫</div>
                            <p className="font-medium text-slate-300">
                                チケットパネルのUIイメージ
                            </p>
                            <p className="text-xs mt-2 text-slate-600">
                                /public/screenshots/... に配置
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
