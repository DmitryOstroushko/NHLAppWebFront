import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/model/person';
import { Season } from 'src/app/model/season';
import { CheckNullPersonalDataService } from 'src/app/service/check-null-personal-data.service';
import { SeasonService } from 'src/app/service/season.service';

@Component({
  selector: 'app-check-null-personal-data',
  templateUrl: './check-null-personal-data.component.html',
  styleUrls: ['./check-null-personal-data.component.css']
})
export class CheckNullPersonalDataComponent implements OnInit {

  isLoaded: boolean = false;
  selectedValue!: string;
  displayedColumns: string[] = ['#', 'person', 'playerFullName', 'teamName'];
  seasonList!: Season[];
  personList!: MatTableDataSource<Person>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  _liveAnnouncer: any;
  
  constructor(private seasonService: SeasonService,
    private checkkNullPersonalDataService: CheckNullPersonalDataService) {
  }

  selectSeason($event: Event) {
    this.selectedValue = ($event.target as HTMLSelectElement).value;
  }

  getNullPersonalDataInfo() {
    this.isLoaded = true;
    this.checkkNullPersonalDataService.getPlayersListBySeason(this.selectedValue.toString())
        .subscribe((data: Person[]) => {
          this.personList = new MatTableDataSource(data);
          this.personList.sort = this.sort;
          this.personList.paginator = this.paginator;
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
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.personList.filter = filterValue.trim().toLowerCase();
    if (this.personList.paginator) {
      this.personList.paginator.firstPage();
    }
  }
  
}
