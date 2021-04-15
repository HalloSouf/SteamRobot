interface CommandProperties {
    name: string;
    description: string;
    category: string;
    usage?: string;
    aliases?: Array<string>;
    permission?: string;
}

interface MySQLConfig {
    host: string;
    user: string;
    password?: string;
    database: string;
    port?: number;
}

interface ColorScheme {
    general: string;
    orange: string;
    red: string;
    green: string;
}