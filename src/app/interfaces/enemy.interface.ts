import { Item } from 'src/app/interfaces/item.interface';

export interface Enemy {
    name: string;
    class: string;
    level: number;
    // experience: number;
    health: number;
    maxHealth: number;
    // mana: number;
    // maxMana: number;
    loot: Item[];
    gold: number;
    power: number;
}