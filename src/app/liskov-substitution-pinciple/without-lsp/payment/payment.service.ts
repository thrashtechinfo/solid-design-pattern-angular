import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  processPayment(amount: number): boolean {
    console.log(`Processing payment of $${amount}`);
    return true; // Assume payment is processed
  }
}
