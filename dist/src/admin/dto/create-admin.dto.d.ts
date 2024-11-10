export declare class CreateAdminDto {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    confirm_password: string;
    is_creator: boolean;
    is_active: boolean;
    hashed_refresh_token?: string;
    hashed_password?: string;
    activation_link?: string;
}
