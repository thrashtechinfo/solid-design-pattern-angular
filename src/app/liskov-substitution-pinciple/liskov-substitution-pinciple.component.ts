import { Component } from '@angular/core';
import { WithLspComponent } from './with-lsp/with-lsp.component';
import { WithoutLspComponent } from './without-lsp/without-lsp.component';

@Component({
  selector: 'app-liskov-substitution-pinciple',
  standalone: true,
  imports: [WithLspComponent, WithoutLspComponent],
  templateUrl: './liskov-substitution-pinciple.component.html',
  styleUrl: './liskov-substitution-pinciple.component.css'
})
export class LiskovSubstitutionPincipleComponent {

}
