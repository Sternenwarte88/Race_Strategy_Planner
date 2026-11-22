import { inject, Injectable } from '@angular/core';
import { FuelConfig } from '../../data/fuel';
import { RaceStorage } from './race-storage';

@Injectable({ providedIn: 'root' })
export class FuelConfigService {
  private fuelData = inject(RaceStorage);

  public saveFuelData(data: Partial<FuelConfig>) {
    Object.assign(this.fuelData.fuelConfig, data);
  }

  public getLapMinute() {
    return this.fuelData.fuelConfig.lapMinute;
  }
  public getLapSecond() {
    return this.fuelData.fuelConfig.lapSecond;
  }
  public getLapMs() {
    return this.fuelData.fuelConfig.lapMillisecond;
  }

  public getFuelPerRace() {
    return this.fuelData.fuelConfig.fuelPerRace;
  }

  public getFuelPerLap() {
    return this.fuelData.fuelConfig.fuelPerLap;
  }
}
