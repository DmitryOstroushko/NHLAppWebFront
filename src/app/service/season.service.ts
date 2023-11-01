import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Season } from '../model/season';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class SeasonService extends ApiService {

  constructor(http: HttpClient) {
    const endpoint = 'season'

    super(http, endpoint)
  }

  public getAvailableSeasonList(): Observable<Season[]> {
    return this.get<Season[]>()
  }
  
}
