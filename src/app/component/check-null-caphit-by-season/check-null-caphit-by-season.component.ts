import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  isLoaded: boolean = false;
  selectedValue!: string;
  displayedColumns: string[] = ['#', 'playerFullName', 'teamName', 'season', 'gamesCount', 'capHit'];  
  seasonList!: Season[];
  //capHitList!: CapHit[];
  capHitList!: MatTableDataSource<CapHit>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  _liveAnnouncer: any;
  
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
          this.capHitList = new MatTableDataSource(data);
          this.capHitList.sort = this.sort;
          this.capHitList.paginator = this.paginator;
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
    this.capHitList.filter = filterValue.trim().toLowerCase();
    if (this.capHitList.paginator) {
      this.capHitList.paginator.firstPage();
    }
  }
  
}

