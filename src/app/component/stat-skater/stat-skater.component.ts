import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Nationality } from 'src/app/model/nationality';
import { Season } from 'src/app/model/season';
import { Team } from 'src/app/model/team';
import { SkaterStat } from 'src/app/model/skater-stat';

import { SeasonService } from 'src/app/service/season.service';
import { TeamService } from 'src/app/service/team.service';
import { NationalityService } from 'src/app/service/nationality.service';
import { StatSkaterService } from 'src/app/service/stat-skater.service';

@Component({
  selector: 'app-stat-skater',
  templateUrl: './stat-skater.component.html',
  styleUrls: ['./stat-skater.component.css']
})
export class StatSkaterComponent implements OnInit {

  isLoaded: boolean = false;
  seasonList!: Season[];
  teamList!: Team[];
  nationalityList!: Nationality[];

  seasonSelectedValue: string = "";
  teamSelectedValue: number = -1;
  nationalitySelectedValue: string = "";

  displayedColumns: string[] = ['playerFullName', 
                                'teamName',
                                'games',
                                'points',
                                'goals',
                                'assists',
                                'plusMinus',
                                'timeOnIce',
                                'caphit'
                              ]; 

  skaterStatList!: MatTableDataSource<SkaterStat>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  _liveAnnouncer: any;

  constructor(private seasonService: SeasonService,
    private teamService: TeamService,
    private nationalityService: NationalityService,
    private statSkaterService: StatSkaterService) {
  }

  selectSeason($event: Event) {
    this.seasonSelectedValue = ($event.target as HTMLSelectElement).value;
  }

  selectTeam($event: Event) {
    this.teamSelectedValue = Number(($event.target as HTMLSelectElement).value);
  }

  selectNationality($event: Event) {
    this.nationalitySelectedValue = ($event.target as HTMLSelectElement).value;
  }

  getSkaterStatisticsInfo() {
    this.isLoaded = true;
    this.statSkaterService.getStatistics(this.seasonSelectedValue.toString(),
                                                this.teamSelectedValue,
                                                this.nationalitySelectedValue.toString())
        .subscribe((data: SkaterStat[]) => {
          this.skaterStatList = new MatTableDataSource(data);
          this.skaterStatList.sort = this.sort;
          this.skaterStatList.paginator = this.paginator;
        });
  } 

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit() {
    this.seasonService.getAvailableSeasonList().subscribe((data: Season[]) => {
      this.seasonList = data;
    });
    this.teamService.getTeamList().subscribe((data: Team[]) => {
      this.teamList = data;
    });
    this.nationalityService.getNationalityList().subscribe((data: Nationality[]) => {
      this.nationalityList = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.skaterStatList.filter = filterValue.trim().toLowerCase();
    if (this.skaterStatList.paginator) {
      this.skaterStatList.paginator.firstPage();
    }
  }
  
}
