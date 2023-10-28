import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Season } from '../model/season';


@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  private seasonUrl: string;

  constructor(private http: HttpClient) {
    this.seasonUrl = 'http://localhost:8080/api/season';
  }

  public getAvailableSeasonList(): Observable<Season[]> {
    return this.http.get<Season[]>(this.seasonUrl);
  }


}
