import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiskovSubstitutionPincipleComponent } from './liskov-substitution-pinciple.component';

describe('LiskovSubstitutionPincipleComponent', () => {
  let component: LiskovSubstitutionPincipleComponent;
  let fixture: ComponentFixture<LiskovSubstitutionPincipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiskovSubstitutionPincipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiskovSubstitutionPincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
