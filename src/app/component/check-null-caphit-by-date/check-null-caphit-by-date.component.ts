import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CapHitByDate } from 'src/app/model/cap-hit-by-date';
import { CheckNullCaphitByDateService } from 'src/app/service/check-null-caphit-by-date.service';

@Component({
  selector: 'app-check-null-caphit-by-date',
  templateUrl: './check-null-caphit-by-date.component.html',
  styleUrls: ['./check-null-caphit-by-date.component.css']
})
export class CheckNullCaphitByDateComponent {
  _liveAnnouncer: any;
$(arg0: any): Sort {
throw new Error('Method not implemented.');
}

  isLoaded: boolean = false;
  displayedColumns: string[] = ['#', 'playerFullName', 'teamName', 'gameDate', 'gamePK', 'season', 'gamesCount', 'capHit'];
  //capHitList!: CapHitByDate[];
  capHitList!: MatTableDataSource<CapHitByDate>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private checkNullCaphitByDateService: CheckNullCaphitByDateService) {
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  getNullCapHitInfo() {

    this.isLoaded = true;

    this.checkNullCaphitByDateService.getPlayersListByDate(this.range)
        .subscribe((data: CapHitByDate[]) => {
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.capHitList.filter = filterValue.trim().toLowerCase();

    if (this.capHitList.paginator) {
      this.capHitList.paginator.firstPage();
    }
  }

}
