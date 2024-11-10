"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionModule = void 0;
const common_1 = require("@nestjs/common");
const region_service_1 = require("./region.service");
const region_controller_1 = require("./region.controller");
const typeorm_1 = require("@nestjs/typeorm");
const region_entity_1 = require("./entities/region.entity");
let RegionModule = class RegionModule {
};
exports.RegionModule = RegionModule;
exports.RegionModule = RegionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([region_entity_1.Region])],
        controllers: [region_controller_1.RegionController],
        providers: [region_service_1.RegionService],
    })
], RegionModule);
//# sourceMappingURL=region.module.js.map