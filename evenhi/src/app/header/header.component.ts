import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { EMPTY } from 'rxjs';
import { __values } from 'tslib';

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

}
