import { Component } from '@angular/core';
import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'app-without-lsp',
  standalone: true,
  imports: [PaymentComponent],
  templateUrl: './without-lsp.component.html',
  styleUrl: './without-lsp.component.css'
})
export class WithoutLspComponent {

}
