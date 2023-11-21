import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TeamRoster } from '../model/team-roster';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamRosterService {

  errorMessage: String = "";
  error: Error | null = null;

  serviceUrl: string = "http://localhost:8080/api/roster.info";

  constructor(private http: HttpClient) { }

  public getRosterList(season: string, 
                        team: number,
                        nationality: string): Observable<TeamRoster[]> {
    
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

    return this.http.get<TeamRoster[]>(this.serviceUrl, {
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
