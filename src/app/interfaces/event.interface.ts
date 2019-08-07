import { EventChoice } from './event-choice.interface';

export interface Event {
    title: string,
    description: string,
    rarity: number,
    choices: EventChoice[]
}