import { Time } from "@angular/common";

export class SkaterStat {
    personID!: number;
    playerFullName!: string;
    nationality!: string;
    teamID!: number;
    teamName!: string;
    games!: number;
    points!: number;
    goals!: number;
    assists!: number;
    plusMinus!: number;
    shots!: number;
    timeOnIce!: Time;
    evenTimeOnIce!: Time;
    ppTimeOnIce!: Time;
    shTimeOnIce!: Time;
    pim!: number;
    ppGoals!: number;
    ppAssists!: number;
    shGoals!: number;
    shAssists!: number;
    hits!: number;
    faceOffTaken!: number;
    faceOffWins!: number;
    faceOffPct!: GLfloat;
    takeaways!: number;
    giveaways!: number;
    blocks!: number;
    caphit!: number;
}