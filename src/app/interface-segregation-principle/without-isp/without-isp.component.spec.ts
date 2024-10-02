import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutIspComponent } from './without-isp.component';

describe('WithoutIspComponent', () => {
  let component: WithoutIspComponent;
  let fixture: ComponentFixture<WithoutIspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutIspComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutIspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
