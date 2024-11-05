import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../../models/event-model.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly API = 'http://localhost:8081/api/events'

  constructor(private http: HttpClient) { }

  public listEvents(): Observable<EventModel[]>{
    console.log("Route Teste: ", this.API+'/list');
    return this.http.get<EventModel[]>(this.API+'/list');
  }

}
