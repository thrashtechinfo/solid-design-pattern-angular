import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutDipComponent } from './without-dip.component';

describe('WithoutDipComponent', () => {
  let component: WithoutDipComponent;
  let fixture: ComponentFixture<WithoutDipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutDipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutDipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
