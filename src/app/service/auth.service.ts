import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { User } from '../model/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService  extends ApiService {

  private token: string | null = null;

  constructor(http: HttpClient) {
    const endpoint = 'auth';
    super(http, endpoint);
  }

  register(user: User): Observable<User>{
    return this.post<User>(user, 'register');
  }

  login(user: User): Observable<{token: string}> {
    return this.post<{token: string}>(user, 'login')
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', token);
            this.setToken(token);
          }
        )
      );
  }

  setToken(token: string | null) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
    localStorage.clear();
  }



}
