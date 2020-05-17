import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { ItemEntity } from "./item.entity";
import { ICreateItemDto } from "./items.dto";

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(ItemEntity)
        private readonly itemsRepository: Repository<ItemEntity>,
    ) {}

    async findAll() {
        return await this.itemsRepository.find();
    }

    async findOne(id: string) {
        return await this.itemsRepository.findOne(id);
    }

    async findByParent(id: string) {
        const queryParentId = id !== "null" ? id : null;
        return await this.itemsRepository.find({ parentId: queryParentId });
    }

    async create(dto: ICreateItemDto) {
        const item = this.itemsRepository.create({
            ...dto,
        });
        return await this.itemsRepository.save(item);
    }

    async delete(id: string) {
        await this.itemsRepository.delete({ id });
        return true;
    }

    async search(query: string) {
        return await this.itemsRepository.find({
            name: Like(`%${query}%`),
        });
    }
}
