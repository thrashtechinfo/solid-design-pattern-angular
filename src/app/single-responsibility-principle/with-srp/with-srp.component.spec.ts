import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithSrpComponent } from './with-srp.component';

describe('WithSrpComponent', () => {
  let component: WithSrpComponent;
  let fixture: ComponentFixture<WithSrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithSrpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithSrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
