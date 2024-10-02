import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithLspComponent } from './with-lsp.component';

describe('WithLspComponent', () => {
  let component: WithLspComponent;
  let fixture: ComponentFixture<WithLspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithLspComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithLspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
