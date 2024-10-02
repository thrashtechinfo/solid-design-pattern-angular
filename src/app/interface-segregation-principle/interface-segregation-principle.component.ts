import { Component } from '@angular/core';
import { WithIspComponent } from './with-isp/with-isp.component';
import { WithoutIspComponent } from './without-isp/without-isp.component';

@Component({
  selector: 'app-interface-segregation-principle',
  standalone: true,
  imports: [WithIspComponent, WithoutIspComponent],
  templateUrl: './interface-segregation-principle.component.html',
  styleUrl: './interface-segregation-principle.component.css'
})
export class InterfaceSegregationPrincipleComponent {

}
