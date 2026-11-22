import { inject, Injectable } from '@angular/core';
import { GeneralConfigService } from './generalConfigService';
import { FuelConfigService } from './fuelConfigService';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  public generalDataService = inject(GeneralConfigService);
  public fuelDataService = inject(FuelConfigService);
}
