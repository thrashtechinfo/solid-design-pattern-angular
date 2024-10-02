import { Component } from '@angular/core';
import { IUser } from '../../../interfaces/user.interface';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserDetailComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  selectedUser!: IUser;

  users: IUser[] = [
    { name: 'Alice', email: 'alice@example.com', phone: '123-456-7890', address: '123 Elm St', age: 30 },
    { name: 'Bob', email: 'bob@example.com', phone: '098-765-4321', address: '456 Oak St', age: 25 }
  ];

  ngOnInit() {
    // TODO: Fetch users from a service
  }

  selectUser(user: any) {
    this.selectedUser = user;
  }
}
