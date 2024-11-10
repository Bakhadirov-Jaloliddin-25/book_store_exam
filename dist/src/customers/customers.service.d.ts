import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Customer } from "./entities/customer.entity";
import { Repository } from "typeorm";
export declare class CustomersService {
    private readonly customerRepo;
    constructor(customerRepo: Repository<Customer>);
    create(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    findCustomerByEmail(email: string): Promise<Customer>;
    update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer>;
    remove(id: number): Promise<{
        message: string;
    }>;
    activateCustomer(link: string): Promise<{
        is_active: boolean;
        message: string;
    }>;
}
