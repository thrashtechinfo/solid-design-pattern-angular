import { Component, signal } from '@angular/core';
import { PaymentService } from './payment.service';
import { FormsModule } from '@angular/forms';
import { CreditCardService } from './credit-card.service';
import { PaypalService } from './paypal.service';

@Component({
  selector: 'app-payment-lsp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-lsp.component.html',
  styleUrl: './payment-lsp.component.css'
})
export class PaymentLspComponent {
  paymentStatus: string = '';
  payment = signal<number>(0);

  constructor(
    private paymentService: PaymentService
  ) { }

  makePayment(amount: number, type: string) {
    if (type == 'credit-card') {
      this.paymentService = new CreditCardService();
    }
    else if (type == 'paypal') {
      this.paymentService = new PaypalService();
    }
    else {
      this.paymentService = new PaymentService();
    }

    const success = this.paymentService.processPayment(amount);

    if (success) {
      this.paymentStatus = 'Payment ' + type + ' successful';
      console.log('Payment successful');
    } 
    else {
      this.paymentStatus = 'Payment ' + type + ' successful';
      console.log('Payment failed');
    }
  }
}
