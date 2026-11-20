import { Routes } from '@angular/router';
import { FuelCalculator } from './fuel-calculator/fuel-calculator';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "fuel",
        component: FuelCalculator
    }
];
