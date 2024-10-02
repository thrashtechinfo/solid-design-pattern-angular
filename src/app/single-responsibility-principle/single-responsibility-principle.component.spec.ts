import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResponsibilityPrincipleComponent } from './single-responsibility-principle.component';

describe('SingleResponsibilityPrincipleComponent', () => {
  let component: SingleResponsibilityPrincipleComponent;
  let fixture: ComponentFixture<SingleResponsibilityPrincipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleResponsibilityPrincipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleResponsibilityPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
