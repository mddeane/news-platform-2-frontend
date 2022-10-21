import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from './story.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }
  constructor(private http: HttpClient) { }

  addStory(story: Story): Observable<Story> {
    console.log(story);
    return this.http.post<Story>("http://localhost:5000/stories/add", story, this.httpOptions);
  }
}
