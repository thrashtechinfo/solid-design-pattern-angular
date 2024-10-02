import { Component } from '@angular/core';
import { WithDipComponent } from './with-dip/with-dip.component';
import { WithoutDipComponent } from './without-dip/without-dip.component';

@Component({
  selector: 'app-dependency-inversion-principle',
  standalone: true,
  imports: [WithDipComponent, WithoutDipComponent],
  templateUrl: './dependency-inversion-principle.component.html',
  styleUrl: './dependency-inversion-principle.component.css'
})
export class DependencyInversionPrincipleComponent {

}
