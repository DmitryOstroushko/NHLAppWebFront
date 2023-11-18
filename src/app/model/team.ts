import { Conference } from "./conference";
import { Division } from "./division";

export class Team {
    id!: number;
    name!: string;
    abbreviation!: string;
    shortName!: string;
    teamName!: string;
    locationName!: string;
    firstYearOfPlay!: number;;
    officialSiteUrl!: string;
    franchiseId!: number;;
    venueName!: string;
    conference!: Conference;
    division!: Division;
}
