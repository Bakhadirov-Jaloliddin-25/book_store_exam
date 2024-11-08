import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "./entities/customer.entity";
import { Repository } from "typeorm";

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>
  ) {}
  async create(createCustomerDto: CreateCustomerDto) {
    const customer = this.customerRepo.create(createCustomerDto);
    return await this.customerRepo.save(customer);
  }

  async findAll() {
    return this.customerRepo.find({
      relations: ["carts", "ratings", "reviews", "orders", "order_addresses"],
    });
  }

  async findOne(id: number) {
    const customer = await this.customerRepo.findOneBy({ id });
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return customer;
  }

  async findCustomerByEmail(email: string) {
    const customer = await this.customerRepo.findOneBy({ email });
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerRepo.findOne({ where: { id } });
    Object.assign(customer, updateCustomerDto);
    return this.customerRepo.save(customer);
  }

  async remove(id: number) {
    const customer = await this.customerRepo.findOne({ where: { id } });
    if (!customer) {
      throw new NotFoundException(`Customer with ID - ${id} not found`);
    }
    await this.customerRepo.delete(id);
    return { message: `Customer with ID - ${id} removed` };
  }

  async activateCustomer(
    link: string
  ): Promise<{ is_active: boolean; message: string }> {
    const customer = await this.customerRepo.findOne({
      where: { activation_link: link },
    });

    if (!customer) {
      throw new NotFoundException("Customer not found");
    }

    if (customer.is_active) {
      throw new BadRequestException("Customer already activated");
    }

    customer.is_active = true;
    await this.customerRepo.save(customer);

    return {
      is_active: customer.is_active,
      message: "Customer activated successfully",
    };
  }
}
