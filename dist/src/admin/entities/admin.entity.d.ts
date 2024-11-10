export declare class Admin {
    id: number;
    name: string;
    email: string;
    phone_number?: string;
    hashed_password?: string;
    hashed_refresh_token?: string;
    is_active: boolean;
    is_creator: boolean;
    activation_link: string;
}
