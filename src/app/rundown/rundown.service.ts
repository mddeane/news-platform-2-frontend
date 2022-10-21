import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Rundown } from './rundown.model';
import { Observable, of } from 'rxjs';

const rundownUrl = "http://localhost:5000/rundowns";

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

  // getRundown(): Observable<Rundown> {
  //   const rundown = of(this.testRundown);
  //   return rundown;
  // }

  // getRundownById(rundownId: number): Observable<Rundown> {
  //   const rundown = of(this.testRundown);
  //   return rundown;
  // }

}
