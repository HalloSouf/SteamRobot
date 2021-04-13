interface CommandProperties {
    name: string;
    description: string;
    category: string;
    usage?: string;
    aliases?: Array<string>;
    permission?: string;
}