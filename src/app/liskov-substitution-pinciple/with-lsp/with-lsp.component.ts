import { Component } from '@angular/core';
import { PaymentLspComponent } from './payment-lsp/payment-lsp.component';

@Component({
  selector: 'app-with-lsp',
  standalone: true,
  imports: [PaymentLspComponent],
  templateUrl: './with-lsp.component.html',
  styleUrl: './with-lsp.component.css'
})
export class WithLspComponent {

}
