import { Injectable } from '@angular/core';
import { environment } from '../env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = environment.urlApi;

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
    const url = '/user/login';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };
    this.testroute("Route Teste: "+this.API+url);
    return this.http.post(this.API+url, body, { headers });
  }

  public testroute(rota: string){
    console.log("Route Teste: ", rota);
  }
    
}
