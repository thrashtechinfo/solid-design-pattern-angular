import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutOcpComponent } from './without-ocp.component';

describe('WithoutOcpComponent', () => {
  let component: WithoutOcpComponent;
  let fixture: ComponentFixture<WithoutOcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutOcpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutOcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
