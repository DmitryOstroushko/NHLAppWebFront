import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckNullPersonalDataService {

  errorMessage: String = "";
  error: Error | null = null;

  serviceUrl: string = "http://localhost:8080/api/check/person.null";

  constructor(private http: HttpClient) { }

  public getPlayersListBySeason(season: string): Observable<Person[]> {
    //return this.http.get<CapHit[]>(this.serviceUrl + "?season=" + season);
    return this.http.get<Person[]>(this.serviceUrl, {
        params: new HttpParams().set('season', season)
    })
    .pipe(
//      map((data: Person[]) => {
//      console.log("==== data is received =====");
//      console.log("     count of data: " + data.length);
//      console.log("     type of data: " + typeof(data))
//      return data;
//    }), 
      catchError(err => {
        this.error = err;  
        this.errorMessage = err.message;
        return of([]);
      }))
  }

}
