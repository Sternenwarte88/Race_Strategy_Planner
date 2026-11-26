import { Routes } from '@angular/router';
import { FuelCalculator } from './fuel-calculator/fuel-calculator';
import { Home } from './home/home';
import { Summary } from './summary/summary';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'fuel',
    component: FuelCalculator,
  },
  {
    path: 'summary',
    component: Summary,
  },
];
