import { ITimestamps } from "@/core/domain/entities/timestamps.entity";

export interface IEquipment extends ITimestamps {
    name: string;
    description: string;
    image: string;
    qty: number;
    status: string;
}