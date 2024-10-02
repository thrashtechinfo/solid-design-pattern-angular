import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDipComponent } from './with-dip.component';

describe('WithDipComponent', () => {
  let component: WithDipComponent;
  let fixture: ComponentFixture<WithDipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithDipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithDipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
