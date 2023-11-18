import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapHit } from '../model/cap-hit';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckNullCaphitBySeasonService {

  errorMessage: String = "";
  error: Error | null = null;

  serviceUrl: string = "http://localhost:8080/api/check/caphit.null";

  constructor(private http: HttpClient) { }

  public getPlayersListBySeason(season: string): Observable<CapHit[]> {
    //return this.http.get<CapHit[]>(this.serviceUrl + "?season=" + season);
    return this.http.get<CapHit[]>(this.serviceUrl, {
        params: new HttpParams().set('season', season)
    })
    .pipe(
      map((data: CapHit[]) => {
      console.log("==== data is received =====");
      console.log("     count of data: " + data.length);
      console.log("      type of data: " + typeof(data))
      console.log("              data: " + data)
      return data;
    }), 
      catchError(err => {
        this.error = err;  
        this.errorMessage = err.message;
        return of([]);
      }))
  }

}
