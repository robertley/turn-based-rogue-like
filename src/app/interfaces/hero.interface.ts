import { Item } from 'src/app/interfaces/item.interface';
import { HeroStats } from './hero-stats.interface';

export interface Hero {
    name: string;
    class: number;
    level: number;
    experience: number;
    health: number;
    maxHealth: number;
    mana: number;
    maxMana: number;
    inventory: Item[];
    equippedWeapon?: number;
    gold: number;
    stats: HeroStats;
}