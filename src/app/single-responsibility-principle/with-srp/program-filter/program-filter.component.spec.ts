import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramFilterComponent } from './program-filter.component';

describe('ProgramFilterComponent', () => {
  let component: ProgramFilterComponent;
  let fixture: ComponentFixture<ProgramFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
