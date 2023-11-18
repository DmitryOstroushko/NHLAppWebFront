import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { SkaterStat } from '../model/skater-stat';

@Injectable({
  providedIn: 'root'
})
export class StatSkaterService {

  errorMessage: String = "";
  error: Error | null = null;

  serviceUrl: string = "http://localhost:8080/api/players.stat";

  constructor(private http: HttpClient) { }

  public getStatistics(season: string, 
                        team: number,
                        nationality: string): Observable<SkaterStat[]> {
    
    let queryParams = new HttpParams();
    
    if (season) {
      queryParams = queryParams.set('season', season);
    }
    if (team > 0) {
      queryParams = queryParams.set('team', team);
    }
    if (nationality) {
      queryParams = queryParams.set('country', nationality);
    }

    return this.http.get<SkaterStat[]>(this.serviceUrl, {
        params: queryParams
    })
    .pipe(
      //map((data: SkaterStat[]) => {
      //console.log("==== data is received =====");
      //console.log("     count of data: " + data.length);
      //console.log("      type of data: " + typeof(data))
      //console.log("              data: " + data)
      //return data;
    //}), 
      catchError(err => {
        this.error = err;  
        this.errorMessage = err.message;
        return of([]);
      }))
  }
  
}
