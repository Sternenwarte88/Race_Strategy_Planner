import { inject, Injectable } from '@angular/core';
import { FuelConfig } from '../../data/fuel';
import { RaceStorage } from './race-storage';

@Injectable({ providedIn: 'root' })
export class FuelConfigService {
  private fuelData: RaceStorage = inject(RaceStorage);

  public saveFuelData(data: Partial<FuelConfig>): void {
    Object.assign(this.fuelData.fuelConfig, data);
  }

  public getLapMinute(): number {
    return this.fuelData.fuelConfig.lapMinute;
  }
  public getLapSecond(): number {
    return this.fuelData.fuelConfig.lapSecond;
  }
  public getLapMs(): number {
    return this.fuelData.fuelConfig.lapMillisecond;
  }

  public getFuelPerRace(): number {
    return this.fuelData.fuelConfig.fuelPerRace;
  }

  public getFuelPerLap(): number {
    return this.fuelData.fuelConfig.fuelPerLap;
  }
}
