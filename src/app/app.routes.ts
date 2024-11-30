import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent() {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'stepper-erp',
    loadComponent() {
      return import('./components/stepper-erp/stepper-erp.component').then(
        (m) => m.StepperErpComponent
      );
    },
  },
];
