import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Conference } from '../model/conference';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService extends ApiService {

  constructor(http: HttpClient) {
    super(http, 'conference.info')
  }

  public getConferenceList(): Observable<Conference[]> {
    return this.get<Conference[]>();
  }
  
}