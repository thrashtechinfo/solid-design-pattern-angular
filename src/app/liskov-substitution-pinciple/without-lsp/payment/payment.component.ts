import { Component, signal } from '@angular/core';
import { PaymentService } from './payment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  paymentStatus: string = '';
  payment = signal<number>(0);

  constructor(
    private paymentService: PaymentService
  ) { }

  makePayment(amount: number) {
    const success = this.paymentService.processPayment(amount);

    if (success) {
      this.paymentStatus = 'Payment successful';
      console.log('Payment successful');
    } 
    else {
      this.paymentStatus = 'Payment failed';
      console.log('Payment failed');
    }
  }
}
