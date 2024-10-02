import { Injectable } from '@angular/core';
import { PaymentService } from './payment.service';

@Injectable({
  providedIn: 'root'
})
export class PaypalService extends PaymentService {

  constructor() { 
    super();
  }

  override processPayment(amount: number): boolean {
    console.log(`Processing PayPal payment of $${amount}`);
    return super.processPayment(amount); // Call base class method
  }
}
