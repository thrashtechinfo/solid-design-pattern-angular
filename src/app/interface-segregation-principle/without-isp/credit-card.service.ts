import { Injectable } from '@angular/core';
import { PaymentProcessor } from './payment-processor.interface';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService implements PaymentProcessor {

  constructor() { }

  processPayment(amount: number): boolean {
    console.log(`Processing credit card payment of $${amount}`);
    return true;
  }
  
  refundPayment(amount: number): boolean {
    console.log(`Refunding credit card payment of $${amount}`);
    return true;
  }

  validatePaymentDetails(details: any): boolean {
    // Validate credit card details
    return true;
  }

  generateInvoice(invoiceId: string): void {
    // Generate invoice logic
  }
}
