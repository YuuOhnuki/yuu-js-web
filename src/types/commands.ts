export interface Command {
    name: string
    description: string
    usage: string
    category: string
}

export interface CommandsData {
    yuujs: Command[]
    yuudj: Command[]
}
