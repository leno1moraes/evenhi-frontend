import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { EMPTY } from 'rxjs';
import { __values } from 'tslib';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public email: String = '';
  public username: String = '';
  
  constructor(
    private http: HttpClient, 
    private router: Router,
    private eventService: EventService,
    private userservice: UserService,)
  {}  

  ngOnInit(): void {
    const token = sessionStorage.getItem('authToken');
    if(token){
      this.email = sessionStorage.getItem('email') || '';
      this.username = sessionStorage.getItem('username') || '';
    }
  }

  public enableCpf: Boolean = false;
  public enableRg: Boolean = false;

  public activeInputCpf(){
    if (!this.enableCpf){
      this.enableCpf = true;
      this.enableRg = false;
    }
  }

  public activeInputRg(){
    if (!this.enableRg){
      this.enableRg = true;
      this.enableCpf = false;
    }
  }  

  public logout(){
    console.log("##### Iniciando Logout #####");
    this.userservice.logout().subscribe((resultset) => {
      if (resultset != "0")
        console.log("ERRO NO logout", resultset);
      else {
        console.log("Sucesso logout", resultset);
      }
    });

    // sessionStorage.removeItem('authToken');
    // sessionStorage.removeItem('email');
    // sessionStorage.removeItem('username');
    // console.log('Logout realizado com sucesso');

  }

}
