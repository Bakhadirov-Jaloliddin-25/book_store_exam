"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("./entities/admin.entity");
const typeorm_2 = require("typeorm");
let AdminService = class AdminService {
    constructor(adminRepo) {
        this.adminRepo = adminRepo;
    }
    async create(createAdminDto) {
        const admin = this.adminRepo.create(createAdminDto);
        return await this.adminRepo.save(admin);
    }
    async findAll() {
        return this.adminRepo.find();
    }
    async findAdminByEmail(email) {
        const admin = await this.adminRepo.findOneBy({ email });
        return admin;
    }
    async findOne(id) {
        const admin = await this.adminRepo.findOneBy({ id });
        if (!admin) {
            throw new common_1.NotFoundException(`Admin with ID ${id} not found`);
        }
        return admin;
    }
    async update(id, updateAdminDto) {
        const admin = await this.adminRepo.findOne({ where: { id } });
        Object.assign(admin, updateAdminDto);
        return this.adminRepo.save(admin);
    }
    async remove(id) {
        const admin = await this.adminRepo.findOne({ where: { id } });
        if (!admin) {
            throw new common_1.NotFoundException(`Admin with ID - ${id} not found`);
        }
        await this.adminRepo.delete(id);
        return { message: `Admin with ID - ${id} removed` };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.Admin)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminService);
//# sourceMappingURL=admin.service.js.map