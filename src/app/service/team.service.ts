import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService  extends ApiService {

  constructor(http: HttpClient) {
    super(http, 'teams.info')
  }

  public getTeamList(): Observable<Team[]> {
    return this.get<Team[]>();
  }
}
