import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CapHitByDate } from 'src/app/model/cap-hit-by-date';
import { CheckNullCaphitByDateService } from 'src/app/service/check-null-caphit-by-date.service';

@Component({
  selector: 'app-check-null-caphit-by-date',
  templateUrl: './check-null-caphit-by-date.component.html',
  styleUrls: ['./check-null-caphit-by-date.component.css']
})
export class CheckNullCaphitByDateComponent {

  capHitList!: CapHitByDate[];

  isLoaded: boolean = false;
  displayedColumns: string[] = ['#', 'playerFullName', 'teamName', 'gameDate', 'gamePK', 'season', 'gamesCount', 'capHit'];

  constructor(private checkNullCaphitByDateService: CheckNullCaphitByDateService) {
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  getNullCapHitInfo() {

    this.isLoaded = true;
    //todo: разобраться со значениями selectedValue
    this.checkNullCaphitByDateService.getPlayersListByDate(this.range)
        .subscribe((data: CapHitByDate[]) => {
          this.capHitList = data;
        });

    console.log(this.capHitList);

  }

}
