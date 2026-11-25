import { Component, inject, signal, WritableSignal } from '@angular/core';
import { form, FormField, max, min } from '@angular/forms/signals';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { DataStorageService } from '../services/dataStorageService';
import { Utility } from '../utility/utility';
import { FuelConfigService } from '../services/fuelConfigService';
import { GeneralConfigService } from '../services/generalConfigService';

@Component({
  selector: 'app-fuel-calculator',
  imports: [
    MatFormField,
    MatInput,
    FormField,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCheckbox,
    FormsModule,
  ],
  templateUrl: './fuel-calculator.html',
  styleUrl: './fuel-calculator.css',
})
export class FuelCalculator {
  dataStorageService: DataStorageService = inject(DataStorageService);
  fuelDataService: FuelConfigService = this.dataStorageService.fuelDataService;
  generalDataService: GeneralConfigService = this.dataStorageService.generalDataService;
  lapTimeModel = signal({
    minutes: this.fuelDataService.getLapMinute(),
    seconds: this.fuelDataService.getLapSecond(),
    milliSeconds: this.fuelDataService.getLapMs(),
    fuelPerLap: this.fuelDataService.getFuelPerLap(),
    lapsPerRace: this.calculateLapsPerRace(),
  });
  withInlap: boolean = false;
  withOutlap: boolean = false;

  lapForm = form(this.lapTimeModel, (path) => {
    min(path.minutes, 0);
    min(path.seconds, 0);
    min(path.milliSeconds, 0);

    max(path.milliSeconds, 999);
    max(path.seconds, 59);
    max(path.minutes, 59);
  });

  saveLapConfig(): void {
    this.fuelDataService.saveFuelData({
      lapMinute: this.lapTimeModel().minutes,
      lapSecond: this.lapTimeModel().seconds,
      lapMillisecond: this.lapTimeModel().milliSeconds,
      fuelPerLap: this.lapTimeModel().fuelPerLap,
    });
  }

  calculateLapMs(): number {
    let minutes = this.fuelDataService.getLapMinute();
    let seconds = this.fuelDataService.getLapSecond();
    let ms = this.fuelDataService.getLapMs();

    return Utility.convertTimeInMs(0, minutes, seconds, ms);
  }
  calculateRaceMs(): number {
    let hours = this.generalDataService.getRaceLengthHour();
    let minutes = this.generalDataService.getRaceLengthMinutes();

    return Utility.convertTimeInMs(hours, minutes);
  }

  calculateFuelPerRace(): void {
    let fuelPerRace =
      this.fuelDataService.getFuelPerLap() * this.generalDataService.getLapsPerRace();
    fuelPerRace = Math.ceil(fuelPerRace);
    this.fuelDataService.saveFuelData({ fuelPerRace: fuelPerRace });
  }

  calculateLapsPerRace(): void {
    let lapTimesInMs = this.calculateLapMs();
    let raceTimeInMs = this.calculateRaceMs();

    if (lapTimesInMs == 0) {
      return;
    }

    let roundsPerRace = raceTimeInMs / lapTimesInMs;

    if (this.withInlap) {
      roundsPerRace++;
    }
    if (this.withOutlap) {
      roundsPerRace++;
    }
    this.generalDataService.saveGeneralConfig({ lapsPerRace: Math.ceil(roundsPerRace) });
    this.calculateFuelPerRace();
  }

  validateData(
    field: 'minutes' | 'seconds' | 'milliSeconds' | 'fuelPerLap',
    maxTime: number,
  ): void {
    const value: number = this.lapTimeModel()[field];
    const correctedTime: number = Math.min(maxTime, Math.max(0, value));

    this.lapTimeModel.update((state) => ({
      ...state,
      [field]: correctedTime,
    }));

    this.saveLapConfig();
    this.calculateLapsPerRace();
  }
}
