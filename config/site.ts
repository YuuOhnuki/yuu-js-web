export const siteConfig = {
    name: 'yuu-js',
    description:
        '日本語コミュニティ向けのレベリング・チケット・ロールパネル対応 Discord ボット',
    url: 'https://yuu-js.example.com',
    ogImage: 'https://yuu-js.example.com/og.jpg',
    links: {
        invite: process.env.NEXT_PUBLIC_INVITE_URL || '#',
        support: process.env.NEXT_PUBLIC_SUPPORT_URL || '#',
        github: 'https://github.com/your-repo/yuu-js',
        terms: '#',
        privacy: '#',
    },
    hero: {
        catchphrase: 'コミュニティのための多機能 Discord ボット',
        subcopy: 'もっとシンプルに、もっと使いやすく',
    },
    features: [
        {
            title: 'レベリング / ランキング',
            description:
                'メッセージに応じて XP を付与し、/rank や /leaderboard でランキングを表示',
            icon: 'Star',
        },
        {
            title: '経済システム',
            description:
                '仮想通貨によるポイント管理（コマンド構成に合わせて調整可）',
            icon: 'Coins',
        },
        {
            title: 'チケットシステム',
            description: 'サポート用チャンネルをボタンひとつで自動作成',
            icon: 'Ticket',
        },
        {
            title: 'ロールパネル',
            description: 'ボタンまたはセレクトメニューからロール付与',
            icon: 'Users',
        },
        {
            title: '管理・モデレーション',
            description: '/kick, /ban, /timeout, /purge などの管理コマンド',
            icon: 'Shield',
        },
        {
            title: 'サーバー & ユーザー情報',
            description: '/server や /user で情報を簡単取得',
            icon: 'Info',
        },
    ],
    steps: [
        {
            step: 1,
            title: 'ボットを招待する',
            description:
                '「ボットを招待する」ボタンから、自分のサーバーに yuu-js を追加',
        },
        {
            step: 2,
            title: '権限の確認',
            description: '管理者権限や必要な権限が付与されているか確認',
        },
        {
            step: 3,
            title: '基本設定',
            description:
                '/config コマンドで基本設定（サポートロールなど）を行う',
        },
        {
            step: 4,
            title: 'パネルの作成',
            description: '/rolepanel や /ticketpanel で各種パネルを作成',
        },
    ],
    faq: [
        {
            question: '利用は無料ですか？',
            answer: 'はい、基本的な機能はすべて無料でご利用いただけます。',
        },
        {
            question: '権限はどの程度必要ですか？',
            answer: 'ロール付与やチャンネル作成などを行うため、適切な権限（推奨は管理者権限）が必要です。',
        },
        {
            question: '日本語以外の言語には対応していますか？',
            answer: '現在は主に日本語コミュニティ向けに設計されていますが、将来的に多言語対応も予定しています。',
        },
        {
            question: 'バグ報告や要望はどこにすれば良いですか？',
            answer: '公式のサポートサーバーにて受け付けております。お気軽にご参加ください。',
        },
    ],
}
