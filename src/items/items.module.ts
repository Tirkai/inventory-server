import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemEntity } from "./item.entity";
import { ItemsController } from "./items.controller";
import { ItemsService } from "./items.service";

@Module({
    imports: [TypeOrmModule.forFeature([ItemEntity])],
    providers: [ItemsService],
    controllers: [ItemsController],
    exports: [TypeOrmModule],
})
export class ItemsModule {}
