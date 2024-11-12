import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  msnError: string = '';
  msnSuccess: string = '';
  msnWarnning: string = '';
  isDisableMsnSuccess: boolean = false;
  isDisableMsnError: boolean = false;
  isDisableMsnWarnning: boolean = false;

  usermail: string = '';
  userpassword: string = '';

  constructor(
    private http: HttpClient, 
    private router: Router,
    private eventService: EventService,
    private userservice: UserService,)
  {}

  ngOnInit(): void {
  }

  onSubmit() {

    if (!this.validate()){
      this.userservice.login(this.usermail, this.userpassword).subscribe(
        response => {
          const token = response.jwtToken;
          const username_response = response.username;
          const email_response = response.email;
          const roles_response = response.roles;           
          sessionStorage.setItem('authToken', token);
          sessionStorage.setItem('username', username_response);
          sessionStorage.setItem('email', email_response);
          sessionStorage.setItem('roles', roles_response);
          console.log('Login bem-sucedido');
          console.log('TOken Gerado: ', token);
          this.msnSuccess = 'Logado com sucesso';
          this.isDisableMsnSuccess = true;         
          window.location.href = '/';         
        },
        error => {
          if (error.error === '991'){
            this.msnWarnning = "email ou senha incorretos!";
            this.isDisableMsnWarnning = true;            
 
          }else{
            this.msnError = 'Erro: interno - contacte o administrador'; 
            this.isDisableMsnError = true; 
            console.error('Falha no login', error);
          }    
        }

      );
    }

  }

  public closeMsn(msn: string){
    this.isDisableMsnSuccess = false;
    this.isDisableMsnError = false;
    this.isDisableMsnWarnning = false;
  }

  public validate(): boolean{
    if ( !this.usermail || !this.userpassword ){
      this.msnWarnning = "email ou senha incorretos!";
      this.isDisableMsnWarnning = true;
      return true;
    }

    return false;

  }

}
