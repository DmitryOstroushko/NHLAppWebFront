import { Component } from '@angular/core';
import { CapHit } from 'src/app/model/cap-hit';
import { Season } from 'src/app/model/season';
import { CheckNullCaphitBySeasonService } from 'src/app/service/check-null-caphit-by-season.service';
import { SeasonService } from 'src/app/service/season.service';

@Component({
  selector: 'app-check-null-caphit-by-season',
  templateUrl: './check-null-caphit-by-season.component.html',
  styleUrls: ['./check-null-caphit-by-season.component.css']
})
export class CheckNullCaphitBySeasonComponent {

  seasonList!: Season[];
  capHitList!: CapHit[];

  isLoaded: boolean = false;
  selectedValue!: string;
  displayedColumns: string[] = ['playerFullName', 'teamName', 'season', 'capHit'];  
  
  constructor(private seasonService: SeasonService, 
    private checkNullCaphitBySeasonService: CheckNullCaphitBySeasonService) {
  }

  getNullCapHitInfo() {
    // запрос к Restful за статистикой
    this.isLoaded = true;
    console.log(typeof this.selectedValue);
    console.log("3".concat(this.selectedValue.toString()));
    console.log("2");
    this.checkNullCaphitBySeasonService.getPlayersListBySeason(this.selectedValue.toString())
      .subscribe((data: CapHit[]) => {
        this.capHitList = data;
      });
  }

  selectSeason(event: Event) {
    this.selectedValue = (event.target as HTMLSelectElement).value;
  }

  ngOnInit() {
    this.seasonService.getAvailableSeasonList().subscribe((data: Season[]) => {
      this.seasonList = data;
    });
  }
  
}
