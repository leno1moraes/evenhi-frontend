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
    {country: "", state: "", street: "", district: "", zipcode: "78015050", id: 1, status: 1, nameEvent: 'Congresso de Gatronoia', pathImage: 'assets/images/evenhi-logo.png', city: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', subscribers: 100, userId: 1 },
    {country: "", state: "", street: "", district: "", zipcode: "78015050", id: 2, status: 0, nameEvent: 'Palestra', pathImage: 'assets/images/evenhi-logo.png', city: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', subscribers: 80, userId: 1 },
    {country: "", state: "", street: "", district: "", zipcode: "78015050", id: 3, status: 0, nameEvent: 'Dog pra cachorro', pathImage: 'assets/images/evenhi-logo.png', city: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', subscribers: 200, userId: 1 },
    {country: "", state: "", street: "", district: "", zipcode: "78015050", id: 4, status: 1, nameEvent: 'Palestra Dra Laura', pathImage: 'assets/images/evenhi-logo.png', city: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', subscribers: 115, userId: 1 },
    {country: "", state: "", street: "", district: "", zipcode: "78015050", id: 5, status: 0, nameEvent: 'Aula aberta', pathImage: 'assets/images/evenhi-logo.png', city: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', subscribers: 75, userId: 1 },
    {country: "", state: "", street: "", district: "", zipcode: "78015050", id: 6, status: 1, nameEvent: 'Cinema Novo', pathImage: 'assets/images/evenhi-logo.png', city: 'Belo Horizonte - MG', date: 'SEX, 15 DEZ . 19:00', subscribers: 220, userId: 1 },
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
            eventData.nameEvent,
            eventData.pathImage,
            eventData.zipcode,
            eventData.district,
            eventData.street,
            eventData.state,
            eventData.city,
            eventData.country,
            eventData.subscribers,
            eventData.userId,
            eventData.status,
            eventData.date
          );
        }         
    }
  }

}
