import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyEventsListComponent } from './my-events-list/my-events-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-my-events',
  standalone: true,
  imports: [CommonModule, MyEventsListComponent],
  templateUrl: './user-my-events.component.html',
  styleUrl: './user-my-events.component.css'
})
export class UserMyEventsComponent {
  enableMyListEvent = false;
  user!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { } 
  
  ngOnInit(){
    const actionRoute = this.route.snapshot.paramMap.get('action');
    
    if (actionRoute === 'list'){
      this.user = Number(this.route.snapshot.paramMap.get('user')) || 0;
      this.enableMyListEvent = true;      
    }

  }
}
