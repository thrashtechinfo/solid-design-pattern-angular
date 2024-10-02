import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Route {
  name: string,
  path: string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  routes: Route[] = [
    {
      name: "S: SRP",
      path: "/single-responsibility-principle"
    },
    {
      name: "O: OCP",
      path: "/"
    },
    {
      name: "L: LSP",
      path: "/"
    },
    {
      name: "I: ISP",
      path: "/"
    },
    {
      name: "D: DIP",
      path: "/"
    }
  ]
}
