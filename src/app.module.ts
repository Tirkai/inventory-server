import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as path from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ItemsModule } from "./items/items.module";
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "sqlite",
            database: path.join(__dirname, "/../database/inventory.db"),
            synchronize: true,
            entities: [path.join(__dirname, "**/*.entity{.ts,.js}")],
        }),

        ItemsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
