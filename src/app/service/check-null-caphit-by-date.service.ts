import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CapHitByDate } from '../model/cap-hit-by-date';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CheckNullCaphitByDateService {

  errorMessage: String = "";
  error: Error | null = null;

  serviceUrl: string = "http://localhost:8080/api/check/caphit.null";

  constructor(private http: HttpClient) { }

  getDateAsString(date: Date): string {
    const dateSrc = date.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
    return dateSrc.split(".").reverse().join("-");
  } 

  public getPlayersListByDate(range: FormGroup): Observable<CapHitByDate[]> {

    const dateObjectStart = range.value.start;
    const dateObjectEnd = range.value.end;
    const dateSrcStart = dateObjectStart.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
    const dateSrcEnd = dateObjectEnd.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
    const dateDstStart = dateSrcStart.split(".").reverse().join("-");
    const dateDstEnd = dateSrcEnd.split(".").reverse().join("-");

    return this.http.get<CapHitByDate[]>(this.serviceUrl, {
        params: new HttpParams()
          .set("dateStart", this.getDateAsString(range.value.start))
          .set("dateEnd", this.getDateAsString(range.value.end))
//        .set('dateStart', dateDstStart)
//        .set('dateEnd', dateDstEnd)
    })
    .pipe(
      catchError(err => {
        this.error = err;  
        this.errorMessage = err.message;
        return of([]);
      }))
  }

}
