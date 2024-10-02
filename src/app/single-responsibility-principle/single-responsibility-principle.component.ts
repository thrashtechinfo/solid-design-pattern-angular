import { Component } from '@angular/core';
import { WithSrpComponent } from './with-srp/with-srp.component';
import { WithoutSrpComponent } from './without-srp/without-srp.component';

@Component({
  selector: 'app-single-responsibility-principle',
  standalone: true,
  imports: [WithSrpComponent, WithoutSrpComponent],
  templateUrl: './single-responsibility-principle.component.html',
  styleUrl: './single-responsibility-principle.component.css'
})
export class SingleResponsibilityPrincipleComponent {

}
