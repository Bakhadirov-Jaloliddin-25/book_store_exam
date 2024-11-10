import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./entities/admin.entity";
import { Repository } from "typeorm";
export declare class AdminService {
    private readonly adminRepo;
    constructor(adminRepo: Repository<Admin>);
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    findAll(): Promise<Admin[]>;
    findAdminByEmail(email: string): Promise<Admin>;
    findOne(id: number): Promise<Admin>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
