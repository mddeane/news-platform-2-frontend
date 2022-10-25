import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Rundown } from './rundown.model';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Constants } from '../common/constants';

const URL = Constants.MAIN_URL                        // "http://localhost:5000"
const RUNDOWN_ENDPOINT = Constants.RUNDOWN_ENDPOINT;  // "/rundowns"
const RUNDOWN_URL = URL + RUNDOWN_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class RundownService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private http: HttpClient) { }

  addRundown(rundown: Rundown): Observable<Rundown> {
    console.log(rundown);
    return this.http.post<Rundown>("http://localhost:5000/rundowns/add", rundown, this.httpOptions);
  }

  getRundownById(rundownId: number): Observable<Rundown> {
    return this.http.get<Rundown>(`${RUNDOWN_URL}/${rundownId}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllRundowns(): Observable<Rundown[]> {
    return this.http.get<Rundown[]>(`${RUNDOWN_URL}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.log('An error occured: ', httpError.error.message)
    } else {
      console.error(`
      Backend returned code ${httpError.status}
      body was: ${httpError.error}`)
    }
    return throwError(() => new Error('Error trying to access rundown.'))
  }

}
