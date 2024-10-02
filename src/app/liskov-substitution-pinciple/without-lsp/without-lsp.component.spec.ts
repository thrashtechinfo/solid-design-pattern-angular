import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutLspComponent } from './without-lsp.component';

describe('WithoutLspComponent', () => {
  let component: WithoutLspComponent;
  let fixture: ComponentFixture<WithoutLspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutLspComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutLspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
