import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModel } from '../models/event-model.model';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-administrator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administrator.component.html',
  styleUrl: './administrator.component.css'
})
export class AdministratorComponent {

  events = [
    {id: 1, status: 1, title: 'Congresso de Gatronoia', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 100 },
    {id: 2, status: 0, title: 'Palestra', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 80 },
    {id: 3, status: 0, title: 'Dog pra cachorro', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 200 },
    {id: 4, status: 1, title: 'Palestra Dra Laura', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 115 },
    {id: 5, status: 0, title: 'Aula aberta', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 75 },
    {id: 6, status: 1, title: 'Cinema Novo', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SEX, 15 DEZ . 19:00', customers: 220 },
  ];

  pageSize = 3;  // Eventos por página
  currentPage = 1;
  activeLinkInicio = 'active';
  activeLinkCriarEvento = '';
  enableListEvent = false;
  enableCreateEvent = false;
  enableDetailEvent = false;
  eventModel!: EventModel;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }  

  ngOnInit(){
    const actionRoute = this.route.snapshot.paramMap.get('action');
    if (actionRoute === 'list'){
      this.enableListEvent = true;      
    }
    if (actionRoute === 'create'){
      this.enableCreateEvent = true;      
    }  
    if (actionRoute === 'detail'){
      const idEvent = this.route.snapshot.paramMap.get('id');
      if (idEvent){
        const eventData = this.events.find(event => event.id === Number(idEvent));
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
          this.enableDetailEvent = true;
        }        
      }        
    }      
    console.log("ActionRoute: ", actionRoute);
  }

  public goToInicio(){
    this.activeLinkInicio = 'active';
    this.activeLinkCriarEvento = '';
  }

  public goToCriarEvento(){
    this.activeLinkInicio = '';
    this.activeLinkCriarEvento = 'active';
  }  

  get paginatedEvents() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.events.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.events.length / this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }  

}
