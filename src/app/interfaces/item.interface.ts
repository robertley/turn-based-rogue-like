import { ItemType } from '../enums/item-type.enum';

export interface Item {
    name: string;
    description?: string;
    value: number;
    power: number;
    type: string;
    subType?: string;
    rarity: number;
}