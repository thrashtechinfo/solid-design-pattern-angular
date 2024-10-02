import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-with-dip',
  standalone: true,
  imports: [],
  templateUrl: './with-dip.component.html',
  styleUrl: './with-dip.component.css'
})
export class WithDipComponent {
  users: any = [];

  constructor(
    private usersService: UserService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.fetchUsers().subscribe((res: any) => {
      this.users = res.data;
      console.log(this.users);
    })
  }
}
