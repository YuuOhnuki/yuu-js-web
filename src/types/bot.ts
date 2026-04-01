export type BotType = 'yuujs' | 'yuudj'

export interface Command {
    name: string
    description: string
    usage: string
    category: string
}

export interface BotCommands {
    yuujs: Command[]
    yuudj: Command[]
}

export interface BotConfig {
    id: BotType
    name: string
    tagline: string
    description: string
    inviteLink: string
    supportServer: string
    features: {
        title: string
        description: string
        icon: string
    }[]
    screenshots: string[]
    detailedFeatures: DetailedFeature[]
}

export interface DetailedFeature {
    title: string
    description: string
    image: string // スクリーンショットのパス
    step: string // "STEP 01" など
}
