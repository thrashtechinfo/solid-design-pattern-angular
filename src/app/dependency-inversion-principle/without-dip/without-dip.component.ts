import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-without-dip',
  standalone: true,
  imports: [],
  templateUrl: './without-dip.component.html',
  styleUrl: './without-dip.component.css'
})
export class WithoutDipComponent implements OnInit{
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
