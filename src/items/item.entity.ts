import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity({ name: "item" })
export class ItemEntity {
    @PrimaryColumn({ type: "uuid" })
    @Generated("uuid")
    id: string;

    @Column()
    name: string;

    @Column({
        default: 1,
    })
    count: number;

    @Column({
        default: true,
    })
    isExist: boolean;

    @Column({
        default: false,
    })
    isNeedRecieve: boolean;

    @Column({
        default: null,
    })
    parentId: string;
}
