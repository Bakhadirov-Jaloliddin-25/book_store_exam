import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./entities/admin.entity";
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    findAll(): Promise<Admin[]>;
    findOne(id: string): Promise<Admin>;
    findAdminByEmail(email: string): Promise<Admin>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
