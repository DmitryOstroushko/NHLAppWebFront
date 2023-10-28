import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapHit } from '../model/cap-hit';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CheckNullCaphitBySeasonService {

  serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = 'http://localhost:8080/api/check/caphit.null';
  }

  public getPlayersListBySeason(season: string): Observable<CapHit[]> {
    console.log(this.serviceUrl + "?season=" + season);
    return this.http.get<CapHit[]>('http://localhost:8080/api/check/caphit.null?season=2023-2024');
    //return this.http.get<CapHit[]>(this.serviceUrl + '?season=' + season);
  }


}
