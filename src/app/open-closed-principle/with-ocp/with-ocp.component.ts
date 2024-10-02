import { Component } from '@angular/core';
import { UserListComponent } from "./user-list/user-list.component";

@Component({
  selector: 'app-with-ocp',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './with-ocp.component.html',
  styleUrl: './with-ocp.component.css'
})
export class WithOcpComponent {

}
