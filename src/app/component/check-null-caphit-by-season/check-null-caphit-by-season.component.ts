import { Component } from '@angular/core';
import { Season } from 'src/app/model/season';
import { SeasonService } from 'src/app/service/season.service';

@Component({
  selector: 'app-check-null-caphit-by-season',
  templateUrl: './check-null-caphit-by-season.component.html',
  styleUrls: ['./check-null-caphit-by-season.component.css']
})
export class CheckNullCaphitBySeasonComponent {

  seasonList!: Season[];

  constructor(private seasonService: SeasonService) {
  }

  ngOnInit() {
    this.seasonService.getAvailableSeasonList().subscribe((data: Season[]) => {
      this.seasonList = data;
    });
  }
  
}
