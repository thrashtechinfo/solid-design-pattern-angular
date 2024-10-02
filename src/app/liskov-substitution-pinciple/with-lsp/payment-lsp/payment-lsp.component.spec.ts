import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLspComponent } from './payment-lsp.component';

describe('PaymentLspComponent', () => {
  let component: PaymentLspComponent;
  let fixture: ComponentFixture<PaymentLspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentLspComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentLspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
