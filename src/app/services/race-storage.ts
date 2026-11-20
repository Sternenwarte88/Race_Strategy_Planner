import { Injectable } from '@angular/core';
import { GeneralConfig } from '../../data/general';
import { FuelConfig } from '../../data/fuel';

@Injectable({
  providedIn: 'root',
})
export class RaceStorage {
  generalConfig: GeneralConfig = new GeneralConfig();
  fuelConfig: FuelConfig = new FuelConfig();
}
