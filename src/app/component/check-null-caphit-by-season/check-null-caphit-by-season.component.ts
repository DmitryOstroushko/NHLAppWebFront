import { Component } from '@angular/core';
import { CapHit } from 'src/app/model/cap-hit';
import { Season } from 'src/app/model/season';
import { SeasonService } from 'src/app/service/season.service';

@Component({
  selector: 'app-check-null-caphit-by-season',
  templateUrl: './check-null-caphit-by-season.component.html',
  styleUrls: ['./check-null-caphit-by-season.component.css']
})
export class CheckNullCaphitBySeasonComponent {

  seasonList!: Season[];
  isLoaded: boolean = false;

  capHitList!: CapHit[];

  displayedColumns: string[] = ['playerFullName', 'teamName', 'season', 'capHit'];

  constructor(private seasonService: SeasonService) {
  }

  getNullCapHitInfo(season: string) {
    // запрос к Restful за статистикой
    
    this.isLoaded = true;
  }

  ngOnInit() {
    this.seasonService.getAvailableSeasonList().subscribe((data: Season[]) => {
      this.seasonList = data;
    });
  }
  
}
