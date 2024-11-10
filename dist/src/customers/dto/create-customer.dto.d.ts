export declare class CreateCustomerDto {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
    phone: string;
    hashed_password?: string;
    hashed_refresh_token?: string;
    activation_link?: string;
}
