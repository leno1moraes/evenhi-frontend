import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-admin-myaccount',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-myaccount.component.html',
  styleUrl: './admin-myaccount.component.css'
})
export class AdminMyaccountComponent {
  @Input() userModel!: UserModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){

  }

}
