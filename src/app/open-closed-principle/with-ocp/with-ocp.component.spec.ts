import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithOcpComponent } from './with-ocp.component';

describe('WithOcpComponent', () => {
  let component: WithOcpComponent;
  let fixture: ComponentFixture<WithOcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithOcpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithOcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
