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
  user!: number;
  myEvents: EventModel[] = [];

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
    this.user = Number(this.route.snapshot.paramMap.get('id')) || 0;
    if (this.user != 0){
      this.events.forEach(element => {
        if (this.user === element.user){
          this.myEvents.push(new EventModel(element.id, element.status, element.title, element.urlImage,
                        element.location, element.date, element.customers));
        }
      });
    }
  }


}
