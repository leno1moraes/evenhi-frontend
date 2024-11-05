import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../services/events/event.service';

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
    private eventService: EventService,)
  {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.eventService.login(this.usermail, this.userpassword).subscribe(
      response => {
        const token = response.token;
        sessionStorage.setItem('authToken', token);
        console.log('Login bem-sucedido');
        this.msnSuccess = 'Logado com sucesso';
        this.isDisableMsnSuccess = true;               
        this.router.navigate(['/']);
      },
      error => {
        this.msnError = 'Erro: ' + error; 
        this.isDisableMsnError = true;        
        console.error('Falha no login', error);
      }
    );
  }

  public closeMsn(msn: string){
    this.isDisableMsnSuccess = false;
    this.isDisableMsnError = false;
    this.isDisableMsnWarnning = false;
  }


}
