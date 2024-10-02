import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutSrpComponent } from './without-srp.component';

describe('WithoutSrpComponent', () => {
  let component: WithoutSrpComponent;
  let fixture: ComponentFixture<WithoutSrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutSrpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutSrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
