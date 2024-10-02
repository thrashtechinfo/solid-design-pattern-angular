import { Injectable } from '@angular/core';
import { PaymentProcessor, Refundable } from './payment-processor.interface';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService implements PaymentProcessor, Refundable {

  constructor() { }

  processPayment(amount: number): boolean {
    console.log(`Processing credit card payment of $${amount}`);
    return true;
  }
  
  refundPayment(amount: number): boolean {
    console.log(`Refunding credit card payment of $${amount}`);
    return true;
  }
}
