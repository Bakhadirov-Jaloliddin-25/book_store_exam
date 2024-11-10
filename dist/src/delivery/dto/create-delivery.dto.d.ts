export declare class CreateDeliveryDto {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
    phone_number: string;
    hashed_password?: string;
    hashed_refresh_token?: string;
    activation_link?: string;
}
