import { Component, signal } from '@angular/core';
import { CreditCardService } from './credit-card.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-with-isp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './with-isp.component.html',
  styleUrl: './with-isp.component.css'
})
export class WithIspComponent {
  paymentStatus: string = '';
  payment = signal<number>(0);

  constructor(
    private paymentService: CreditCardService
  ) { }

  processPayment(amount: number) {
    this.paymentService.processPayment(amount);
  }

  refundPayment(amount: number) {
    this.paymentService.refundPayment(amount);
  }
}
