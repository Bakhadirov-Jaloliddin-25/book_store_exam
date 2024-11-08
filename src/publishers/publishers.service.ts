import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePublisherDto } from "./dto/create-publisher.dto";
import { UpdatePublisherDto } from "./dto/update-publisher.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Publisher } from "./entities/publisher.entity";
import { Repository } from "typeorm";

@Injectable()
export class PublishersService {
  constructor(
    @InjectRepository(Publisher)
    private readonly publisherRepo: Repository<Publisher>
  ) {}
  async create(createPublisherDto: CreatePublisherDto) {
    const publisher = this.publisherRepo.create(createPublisherDto);
    return await this.publisherRepo.save(publisher);
  }

  async findAll() {
    return this.publisherRepo.find({ relations: ["books"] });
  }

  async findOne(id: number) {
    const publisher = await this.publisherRepo.findOneBy({ id });
    if (!publisher) {
      throw new NotFoundException(`Publisher with ID ${id} not found`);
    }
    return publisher;
  }

  async update(id: number, updatePublisherDto: UpdatePublisherDto) {
    return await this.publisherRepo.update(id, updatePublisherDto);
  }

  async remove(id: number) {
    const publisher = await this.publisherRepo.findOne({ where: { id } });
    if (!publisher) {
      throw new NotFoundException(`Publisher with ID - ${id} not found`);
    }
    await this.publisherRepo.delete(id);
    return { message: `Publisher with ID - ${id} removed` };
  }
}
