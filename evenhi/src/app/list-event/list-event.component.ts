import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {

  listOfTypesEvents = [
    {
      typeEvent: 'Musica',
      url: '#1'
    },
    {
      typeEvent: 'Teatro',
      url: '#2'
    },
    {
      typeEvent: 'Cinema',
      url: '#3'
    },    
    {
      typeEvent: 'Congresso',
      url: '#4'
    },   
    {
      typeEvent: 'Palestra',
      url: '#5'
    },           
  ];

  events = [
    { title: 'Congresso de Gatronoia', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00' },
    { title: 'Palestra', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00' },
    { title: 'Dog pra cachorro', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00' },
    { title: 'Palestra Dra Laura', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00' },
    { title: 'Aula aberta', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00' },
    { title: 'Cinema Novo', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SEX, 15 DEZ . 19:00' },
  ];

  pageSize = 3;  // Eventos por página
  currentPage = 1;

  get paginatedEvents() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.events.slice(startIndex, endIndex);
  }

  // Calcula o número total de páginas
  get totalPages() {
    return Math.ceil(this.events.length / this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }


}
