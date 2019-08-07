import { ItemType } from '../enums/item-type.enum';

export interface Item {
    name: string;
    description?: string;
    value: number;
    // minPower: number;
    // maxPower: number;
    power: number;
    type: string;
    rarity: number;
}