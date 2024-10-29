import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EventModel } from '../../models/event-model.model';

@Component({
  selector: 'app-my-event-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-event-detail.component.html',
  styleUrl: './my-event-detail.component.css'
})
export class MyEventDetailComponent {
  myEvent!: number;
  eventModel!: EventModel;

  events = [
    {id: 1, status: 1, title: 'Congresso de Gatronoia', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 100, user: 1 },
    {id: 2, status: 0, title: 'Palestra', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 80, user: 1 },
    {id: 3, status: 0, title: 'Dog pra cachorro', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 200, user: 1 },
    {id: 4, status: 1, title: 'Palestra Dra Laura', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 115, user: 1 },
    {id: 5, status: 0, title: 'Aula aberta', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 75, user: 1 },
    {id: 6, status: 1, title: 'Cinema Novo', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SEX, 15 DEZ . 19:00', customers: 220, user: 1 },
  ];  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { } 
   
  ngOnInit(){
    this.myEvent = Number(this.route.snapshot.paramMap.get('id')) || 0;
      if (this.myEvent != 0){
        const eventData = this.events.find(event => event.id === Number(this.myEvent));
        if (eventData) {
          this.eventModel = new EventModel(
            eventData.id,
            eventData.status,
            eventData.title,
            eventData.urlImage,
            eventData.location,
            eventData.date,
            eventData.customers
          );
        }         
    }
  }

}
