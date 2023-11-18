import { Injectable } from '@angular/core';
import { Division } from '../model/division';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DivisionService extends ApiService {

  constructor(http: HttpClient) {
    super(http, 'division.info')
  }

  public getDivisionList(): Observable<Division[]> {
    return this.get<Division[]>();
  }
  
}
