import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperErpComponent } from './stepper-erp.component';

describe('StepperErpComponent', () => {
  let component: StepperErpComponent;
  let fixture: ComponentFixture<StepperErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperErpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
