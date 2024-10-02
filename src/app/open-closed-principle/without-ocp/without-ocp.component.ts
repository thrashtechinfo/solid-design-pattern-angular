import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-without-ocp',
  standalone: true,
  imports: [],
  templateUrl: './without-ocp.component.html',
  styleUrl: './without-ocp.component.css'
})
export class WithoutOcpComponent {
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
