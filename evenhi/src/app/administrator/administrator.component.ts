import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModel } from '../models/event-model.model';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../models/user-model';
import { AdminListEventComponent } from './admin-list-event/admin-list-event.component';
import { AdminCreateEventComponent } from './admin-create-event/admin-create-event.component';
import { AdminDetailEventComponent } from './admin-detail-event/admin-detail-event.component';
import { AdminMyaccountComponent } from './admin-myaccount/admin-myaccount.component';

@Component({
  selector: 'app-administrator',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminListEventComponent, AdminCreateEventComponent,
            AdminDetailEventComponent, AdminMyaccountComponent
  ],
  templateUrl: './administrator.component.html',
  styleUrl: './administrator.component.css'
})
export class AdministratorComponent {

  events = [
    {country: "", state: "", street: "", district: "", zipcode: "78015050", id: 1, status: 1, nameEvent: 'Congresso de Gatronoia', pathImage: 'assets/images/evenhi-logo.png', city: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', subscribers: 100, userId: 1 },
    {country: "", state: "", street: "", district: "", zipcode: "78015050", id: 2, status: 0, nameEvent: 'Palestra', pathImage: 'assets/images/evenhi-logo.png', city: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', subscribers: 80, userId: 1 },
    {country: "", state: "", street: "", district: "", zipcode: "78015050", id: 3, status: 0, nameEvent: 'Dog pra cachorro', pathImage: 'assets/images/evenhi-logo.png', city: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', subscribers: 200, userId: 1 },
    {country: "", state: "", street: "", district: "", zipcode: "78015050", id: 4, status: 1, nameEvent: 'Palestra Dra Laura', pathImage: 'assets/images/evenhi-logo.png', city: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', subscribers: 115, userId: 1 },
    {country: "", state: "", street: "", district: "", zipcode: "78015050", id: 5, status: 0, nameEvent: 'Aula aberta', pathImage: 'assets/images/evenhi-logo.png', city: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', subscribers: 75, userId: 1 },
    {country: "", state: "", street: "", district: "", zipcode: "78015050", id: 6, status: 1, nameEvent: 'Cinema Novo', pathImage: 'assets/images/evenhi-logo.png', city: 'Belo Horizonte - MG', date: 'SEX, 15 DEZ . 19:00', subscribers: 220, userId: 1 },
  ]; 

  users = [
    {id: 12, email: 'email.velasco@gmail.com', typedocument: 'cpf', document: '147.818.372-12', password: 'fdfsd5f44654689'},
    {id: 25, email: 'maria.silva@gmail.com', typedocument: 'rg', document: '7957456', password: '849892935vnvngf545'}
  ]

  pageSize = 3;  // Eventos por página
  currentPage = 1;
  activeLinkInicio = 'active';
  activeLinkCriarEvento = '';
  enableListEvent = false;
  enableCreateEvent = false;
  enableDetailEvent = false;
  enableAccountEdit  = false;
  eventModel!: EventModel;
  userModel!: UserModel;


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
          this.enableDetailEvent = true;
        }        
      }        
    }
    if (actionRoute === 'user'){
      const iUser = this.route.snapshot.paramMap.get('id');
      if(iUser){
        const userData = this.users.find(user => user.id === Number(iUser));
        if(userData){
          this.userModel = new UserModel(
            userData.id,
            userData.typedocument,
            userData.document,
            userData.email,
            userData.password
          );
          this.enableAccountEdit = true;
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
