import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
} from "@nestjs/common";
import { ICreateItemDto } from "./items.dto";
import { ItemsService } from "./items.service";

@Controller("api/items")
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    async getItems(
        @Query("parentId") parentId?: string,
        @Query("search") search?: string,
    ) {
        if (search) {
            return await this.itemsService.search(search);
        }
        if (parentId) {
            return await this.itemsService.findByParent(parentId);
        } else {
            return await this.itemsService.findAll();
        }
    }

    @Get(":id")
    async getItem(@Param("id") id) {
        return await this.itemsService.findOne(id);
    }

    @Post()
    async createItem(@Body("item") dto: ICreateItemDto) {
        console.log(dto);
        return await this.itemsService.create(dto);
    }

    @Delete(":id")
    async deleteItem(@Param("id") id: string) {
        return this.itemsService.delete(id);
    }
}
