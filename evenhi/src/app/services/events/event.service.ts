import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../../models/event-model.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly API = 'http://localhost:8081/api'

  constructor(private http: HttpClient) { }

  public listEvents(): Observable<EventModel[]>{
    const url = '/events/list';
    console.log("Route Teste: ", this.API+url);
    return this.http.get<EventModel[]>(this.API+url);
  }

  public login(username: string, password: string): Observable<any> {
    const url = '/user/login';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    console.log("Route Teste: ", this.API+url);
    return this.http.post(this.API+url, body, { headers });
  }
    
}
