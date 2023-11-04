import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected apiUrl: string;
  protected fullUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('endpoint') private endpoint: string
  ) {
    this.apiUrl = environment.API_URL
    this.fullUrl = `${this.apiUrl}/${this.endpoint}`
  }

  protected get<T>(query: string = ''): Observable<T> {
    return this.http.get<T>(`${this.fullUrl}/${query}`)
  }

  protected post<T>(data: any, query: string = ''): Observable<T> {
    return this.http.post<T>(`${this.fullUrl}/${query}`, data);
  }


  protected put() { }
  protected patch() { }
  protected delete() { }
}
