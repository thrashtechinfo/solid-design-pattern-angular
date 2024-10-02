import { TestBed } from '@angular/core/testing';

import { CryptoPaymentService } from './crypto-payment.service';

describe('CryptoPaymentService', () => {
  let service: CryptoPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
