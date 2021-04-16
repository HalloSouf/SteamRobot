declare namespace mysql {

    interface config {
        host: string;
        user: string;
        password?: string;
        database: string;
        port?: number;
    }

    interface settings {
        id: number;
        guild: string;
        setting: string;
        value:  string;
        created_at: Date;
        updated_at: Date;
    }

}

interface Colors {
    general: string;
    orange: string;
    red: string;
    green: string;
}

interface SettingsOptions {
    guild: string;
}

interface Settings {
    setting: string;
    value: string;
    created_at: Date;
    updated_at: Date;
}