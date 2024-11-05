import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventModel } from '../../models/event-model.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-events-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-events-list.component.html',
  styleUrl: './my-events-list.component.css'
})
export class MyEventsListComponent {
  userId!: number;
  myEvents: EventModel[] = [];

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
    this.userId = Number(this.route.snapshot.paramMap.get('id')) || 0;
    
    if (this.userId != 0){
      this.events.forEach(element => {
        if (this.userId === element.userId){
          this.myEvents.push(new EventModel(element.id, 
                                            element.nameEvent,
                                            element.pathImage,
                                            element.zipcode,
                                            element.district,
                                            element.street,
                                            element.state,
                                            element.city,
                                            element.country,
                                            element.subscribers,
                                            element.userId,
                                            element.status, 
                                            element.date));
        }
      });
    }

  }


}
