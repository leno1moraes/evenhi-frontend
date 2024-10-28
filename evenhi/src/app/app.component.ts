import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HeaderAdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evenhi';
  hideHeaderFooter = true;

  constructor(
    private router: Router) {}
  
  ngOnInit(){
    this.disableForAdmin('/admin');
    
  }

  public disableForAdmin(pagePatch: string){
    var routTest = this.getRouteWindowsLocation();
    this.hideHeaderFooter = !routTest.includes(pagePatch);
  }

  public getRouteWindowsLocation(): string{
    return window.location.href;
  }

}
