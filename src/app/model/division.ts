import { Conference } from "./conference";

export class Division {
    id!: number;
    name!: string;
    abbreviation!: string;
    shortName!: string;
    conference!: Conference;
}
