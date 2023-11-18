import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Nationality } from '../model/nationality';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NationalityService extends ApiService {

  constructor(http: HttpClient) {
    const endpoint = 'country.alpha'
    super(http, endpoint)
  }
  
  public getNationalityList(): Observable<Nationality[]> {
    return this.get<Nationality[]>();
  }
  
}
