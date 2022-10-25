import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RundownRow } from './rundownRow.model';
import { catchError, Observable, of, throwError } from 'rxjs';

const rowUrl = "http://localhost:5000/rows";

@Injectable({
  providedIn: 'root'
})
export class RundownRowService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private http: HttpClient) { }

  getRowById(rowId: number): Observable<RundownRow> {
    return this.http.get<RundownRow>(`${rowUrl}/${rowId}`, this.httpOptions)
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
    return throwError(() => new Error('Error trying to access rundown row.'))
  }
}
