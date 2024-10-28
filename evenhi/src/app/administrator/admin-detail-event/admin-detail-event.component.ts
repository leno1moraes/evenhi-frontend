import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventModel } from '../../models/event-model.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-detail-event',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-detail-event.component.html',
  styleUrl: './admin-detail-event.component.css'
})
export class AdminDetailEventComponent {
  @Input() eventModel!: EventModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){

  }


}
