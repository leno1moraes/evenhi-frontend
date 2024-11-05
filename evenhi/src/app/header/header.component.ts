import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
