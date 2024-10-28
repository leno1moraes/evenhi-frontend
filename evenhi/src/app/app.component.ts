import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { CommonModule } from '@angular/common';
import { HeaderMyEventsComponent } from './header-my-events/header-my-events.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, 
            HeaderAdminComponent, HeaderMyEventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evenhi';
  hideHeaderFooter = true;
  enableHeaderFooterForAdmin = true
  enableHeaderFooterForUsers = true;

  constructor(
    private router: Router) {}
  
  ngOnInit(){
    this.disableForAdmin('/admin');
    this.disableForUsers('/myevents');
  }

  public disableForAdmin(pagePatch: string){
    var routTest = this.getRouteWindowsLocation();
    this.enableHeaderFooterForAdmin = !routTest.includes(pagePatch);
  }

  public disableForUsers(pagePatch: string){
    var routTest = this.getRouteWindowsLocation();
    this.enableHeaderFooterForUsers = !routTest.includes(pagePatch);
  }

  public getRouteWindowsLocation(): string{
    return window.location.href;
  }

}
