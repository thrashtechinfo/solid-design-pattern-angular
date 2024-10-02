import { Component, Input } from '@angular/core';
import { IUser } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  @Input() user!: IUser;
}
