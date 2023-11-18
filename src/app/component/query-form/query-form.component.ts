import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Season } from 'src/app/model/season';
import { SeasonService } from 'src/app/service/season.service';


@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  template: `<div>Showing search param: {{ composition }}</div>`,
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit, OnDestroy {

  composition: number = 1;
  compositionTitle: string[] = ['Check NULL caphit by season', 
                                'Check NULL caphit by date'];  
  paramsSubscription: any;

  selectedSeasonValue!: string;
  seasonList!: Season[];

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private route: ActivatedRoute,
              private seasonService: SeasonService) { }

  selectSeason($event: Event) {
    this.selectedSeasonValue = ($event.target as HTMLSelectElement).value;
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.composition = +params['composition']; // (+) converts string 'id' to a number
    });

    this.seasonService.getAvailableSeasonList().subscribe((data: Season[]) => {
      this.seasonList = data;
    });
  }

  getInfo() {
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
