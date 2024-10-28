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
      name: "",
      path: "/about-the-author"
    },
    {
      name: "S: SRP",
      path: "/single-responsibility-principle"
    },
    {
      name: "O: OCP",
      path: "/open-closed-principle"
    },
    {
      name: "L: LSP",
      path: "/liskov-substitution-principle"
    },
    {
      name: "I: ISP",
      path: "/interface-segregation-principle"
    },
    {
      name: "D: DIP",
      path: "/dependency-inversion-principle"
    }
  ]
}
