import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../models/event-model.model';
import { environment } from '../env/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly API = environment.urlApi;

  constructor(private http: HttpClient) { }

  public listEvents(): Observable<EventModel[]>{
    const url = '/events/list';
    this.testroute("Route Teste: "+this.API+url);
    return this.http.get<EventModel[]>(this.API+url);
  }

  public testroute(rota: string){
    console.log("Route Teste: ", rota);
  }
    
}
