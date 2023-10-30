import { Component, OnInit } from '@angular/core';
import { CapHit } from 'src/app/model/cap-hit';
import { Season } from 'src/app/model/season';
import { CheckNullCaphitBySeasonService } from 'src/app/service/check-null-caphit-by-season.service';
import { SeasonService } from 'src/app/service/season.service';

@Component({
  selector: 'app-check-null-caphit-by-season',
  templateUrl: './check-null-caphit-by-season.component.html',
  styleUrls: ['./check-null-caphit-by-season.component.css']
})
export class CheckNullCaphitBySeasonComponent implements OnInit { // addedError: implements OnInit

  seasonList!: Season[];
  capHitList!: CapHit[];

  isLoaded: boolean = false;
  selectedValue!: string;
  displayedColumns: string[] = ['#', 'playerFullName', 'teamName', 'season', 'gamesCount', 'capHit'];  
  
  constructor(private seasonService: SeasonService,
    private checkNullCaphitBySeasonService: CheckNullCaphitBySeasonService) {
  }

  selectSeason($event: Event) {
    this.selectedValue = ($event.target as HTMLSelectElement).value;
  }

  getNullCapHitInfo() {

    this.isLoaded = true;
    this.checkNullCaphitBySeasonService.getPlayersListBySeason(this.selectedValue.toString())
        .subscribe((data: CapHit[]) => {
          this.capHitList = data;
        });

  }

  ngOnInit() {
    this.seasonService.getAvailableSeasonList().subscribe((data: Season[]) => {
      this.seasonList = data;
    });
  }
  
}

