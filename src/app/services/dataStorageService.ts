import { inject, Injectable } from '@angular/core';
import { RaceStorage } from './race-storage';
import { GeneralConfig } from '../../data/general';
import { FuelConfig } from '../../data/fuel';
import { GeneralConfigService } from './generalConfigService';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  public generalDataService = inject(GeneralConfigService);
}
