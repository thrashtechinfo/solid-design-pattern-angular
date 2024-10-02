import { Injectable } from '@angular/core';
import { PaymentService } from './payment.service';

@Injectable({
  providedIn: 'root'
})
export class CryptoPaymentService extends PaymentService {

  override processPayment(amount: number): boolean {
    console.log(`Processing cryptocurrency payment of $${amount}`);
    // Different logic for processing payment
    return false; // Simulating a failure
  }
}
