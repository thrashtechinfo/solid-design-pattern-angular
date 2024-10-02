import { Component } from '@angular/core';
import { WithOcpComponent } from './with-ocp/with-ocp.component';
import { WithoutOcpComponent } from './without-ocp/without-ocp.component';

@Component({
  selector: 'app-open-closed-principle',
  standalone: true,
  imports: [WithOcpComponent, WithoutOcpComponent],
  templateUrl: './open-closed-principle.component.html',
  styleUrl: './open-closed-principle.component.css'
})
export class OpenClosedPrincipleComponent {

}
