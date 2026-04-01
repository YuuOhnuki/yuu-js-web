export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center font-bold text-sm">
                            Y
                        </div>
                        <span className="font-bold">YuuJS & YuuDJ</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                        © 2026 YuuJS & YuuDJ. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-8 text-sm text-gray-400">
                    <a
                        href="/terms"
                        className="hover:text-white transition-colors"
                    >
                        利用規約
                    </a>
                    <a
                        href="/privacy"
                        className="hover:text-white transition-colors"
                    >
                        プライバシーポリシー
                    </a>
                    <a
                        href="https://github.com/YuuOhnuki/yuu-js"
                        className="hover:text-white transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}
