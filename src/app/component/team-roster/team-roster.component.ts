import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Nationality } from 'src/app/model/nationality';
import { Season } from 'src/app/model/season';
import { Team } from 'src/app/model/team';
import { TeamRoster } from 'src/app/model/team-roster';
import { NationalityService } from 'src/app/service/nationality.service';
import { SeasonService } from 'src/app/service/season.service';
import { TeamRosterService } from 'src/app/service/team-roster.service';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css']
})
export class TeamRosterComponent implements OnInit {

  isLoaded: boolean = false;
  seasonList!: Season[];
  teamList!: Team[];
  nationalityList!: Nationality[];

  seasonSelectedValue: string = "";
  teamSelectedValue: number = -1;
  nationalitySelectedValue: string = "";

  displayedColumns: string[] = ['playerFullName', 
                                'games',
                                'points',
                                'goals',
                                'plusMinus',
                                'timeOnIce',
                                'caphit'
                              ]; 

  teamRosterList!: MatTableDataSource<TeamRoster>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  _liveAnnouncer: any;

  constructor(private seasonService: SeasonService,
    private teamService: TeamService,
    private nationalityService: NationalityService,
    private teamRosterService: TeamRosterService) {
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

  getTeamRosterInfo() {
    this.isLoaded = true;
    this.teamRosterService.getRosterList(this.seasonSelectedValue.toString(),
                                                this.teamSelectedValue,
                                                this.nationalitySelectedValue.toString())
        .subscribe((data: TeamRoster[]) => {
          this.teamRosterList = new MatTableDataSource(data);
          this.teamRosterList.sort = this.sort;
          this.teamRosterList.paginator = this.paginator;
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
    this.teamRosterList.filter = filterValue.trim().toLowerCase();
    if (this.teamRosterList.paginator) {
      this.teamRosterList.paginator.firstPage();
    }
  }

}
