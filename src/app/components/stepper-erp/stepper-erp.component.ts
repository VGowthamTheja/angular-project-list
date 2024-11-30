import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-stepper-erp',
  imports: [CommonModule],
  templateUrl: './stepper-erp.component.html',
  styleUrl: './stepper-erp.component.scss',
})
export class StepperErpComponent {
  stepList = [
    { id: 0, stepName: 'Basic Details', completed: true },
    { id: 1, stepName: 'Skills', completed: true },
    { id: 2, stepName: 'Experience', completed: false },
  ];
  activeStep = signal(this.stepList[0]);

  updateActiveStep(step: any): void {
    this.activeStep.set(step);
  }
}
