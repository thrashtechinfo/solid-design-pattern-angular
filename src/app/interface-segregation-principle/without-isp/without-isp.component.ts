import { Component, signal } from '@angular/core';
import { CreditCardService } from './credit-card.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-without-isp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './without-isp.component.html',
  styleUrl: './without-isp.component.css'
})
export class WithoutIspComponent {
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

  // forcefully written don't have any implementation
  validatePaymentDetails(details: any) {
    this.paymentService.validatePaymentDetails(details);
  }

  // forcefully written don't have any implementation
  generateInvoice(invoiceId: any) {
    this.paymentService.generateInvoice(invoiceId);
  }
}
