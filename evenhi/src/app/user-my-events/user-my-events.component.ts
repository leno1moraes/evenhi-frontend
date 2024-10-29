import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyEventsListComponent } from './my-events-list/my-events-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MyEventDetailComponent } from './my-event-detail/my-event-detail.component';

@Component({
  selector: 'app-user-my-events',
  standalone: true,
  imports: [CommonModule, MyEventsListComponent, MyEventDetailComponent],
  templateUrl: './user-my-events.component.html',
  styleUrl: './user-my-events.component.css'
})
export class UserMyEventsComponent {
  enableMyListEvent = false;
  enableMyDetailEvent = false;
  user!: number;
  myEvent!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { } 
  
  ngOnInit(){
    const actionRoute = this.route.snapshot.paramMap.get('action');
    
    if (actionRoute === 'list'){
      //this.user = Number(this.route.snapshot.paramMap.get('id')) || 0;
      this.enableMyListEvent = true;      
    }

    if (actionRoute === 'detail'){
      this.enableMyDetailEvent = true;      
    }    

  }
}
