import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-administrator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './administrator.component.html',
  styleUrl: './administrator.component.css'
})
export class AdministratorComponent {

  events = [
    {status: 1, title: 'Congresso de Gatronoia', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 100 },
    {status: 0, title: 'Palestra', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 80 },
    {status: 0, title: 'Dog pra cachorro', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 200 },
    {status: 1, title: 'Palestra Dra Laura', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 115 },
    {status: 0, title: 'Aula aberta', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SAB, 23 NOV . 21:00', customers: 75 },
    {status: 1, title: 'Cinema Novo', urlImage: 'assets/images/evenhi-logo.png', location: 'Belo Horizonte - MG', date: 'SEX, 15 DEZ . 19:00', customers: 220 },
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
