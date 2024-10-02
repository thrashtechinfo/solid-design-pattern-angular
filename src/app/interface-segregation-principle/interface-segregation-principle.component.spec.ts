import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceSegregationPrincipleComponent } from './interface-segregation-principle.component';

describe('InterfaceSegregationPrincipleComponent', () => {
  let component: InterfaceSegregationPrincipleComponent;
  let fixture: ComponentFixture<InterfaceSegregationPrincipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceSegregationPrincipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceSegregationPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
