import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-event-detail',
  standalone: true,
  imports: [],
  templateUrl: './my-event-detail.component.html',
  styleUrl: './my-event-detail.component.css'
})
export class MyEventDetailComponent {
  myEvent!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { } 
   
  ngOnInit(){
    console.log("Rota: ", this.route.snapshot);
    this.myEvent = Number(this.route.snapshot.paramMap.get('id')) || 0;
    console.log("Evento: ", this.myEvent);
  }

}
