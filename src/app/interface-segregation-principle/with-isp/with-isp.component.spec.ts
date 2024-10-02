import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithIspComponent } from './with-isp.component';

describe('WithIspComponent', () => {
  let component: WithIspComponent;
  let fixture: ComponentFixture<WithIspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithIspComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithIspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
