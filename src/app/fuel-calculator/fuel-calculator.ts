import { Component, inject, signal } from '@angular/core';
import { RaceStorage } from '../services/race-storage';
import { form, FormField, max, min } from '@angular/forms/signals';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

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
  raceStorage = inject(RaceStorage);
  lapTimeModel = signal({ minutes: 0, seconds: 0, milliSeconds: 0, fuelPerLap: 0, lapsPerRace: 0 });
  withInlap = false;
  withOutlap = false;

  lapForm = form(this.lapTimeModel, (path) => {
    min(path.minutes, 0);
    min(path.seconds, 0);
    min(path.milliSeconds, 0);

    max(path.milliSeconds, 999);
    max(path.seconds, 59);
    max(path.minutes, 59);
  });

  saveLapConfig() {
    this.raceStorage.fuelConfig.lapMinute = this.lapTimeModel().minutes;
    this.raceStorage.fuelConfig.lapSecond = this.lapTimeModel().seconds;
    this.raceStorage.fuelConfig.lapMillisecond = this.lapTimeModel().milliSeconds;
    this.raceStorage.fuelConfig.fuelPerLap = this.lapTimeModel().fuelPerLap;
  }

  calculateLapMs() {
    let calculatedMs: number = 0;
    let convertedMinuteToMs: number = this.raceStorage.fuelConfig.lapMinute * 1000 * 60;
    let convertedSecondsToMs: number = this.raceStorage.fuelConfig.lapSecond * 1000;

    calculatedMs =
      convertedMinuteToMs + convertedSecondsToMs + this.raceStorage.fuelConfig.lapMillisecond;

    return calculatedMs;
  }
  calculateRaceMs() {
    let calculatedMs: number = 0;

    let convertedHoursToMs: number = this.raceStorage.generalConfig.raceLengthHour * 1000 * 60 * 60;
    let convertedMinuteToMs: number = this.raceStorage.generalConfig.raceLengthMinutes * 1000 * 60;

    calculatedMs = convertedMinuteToMs + convertedHoursToMs;

    return calculatedMs;
  }

  calculateFuelPerRace() {
    let fuelPerRace =
      this.raceStorage.fuelConfig.fuelPerLap * this.raceStorage.generalConfig.lapsPerRace;

    this.raceStorage.fuelConfig.fuelPerRace = Math.ceil(fuelPerRace);
  }

  calculateLapsPerRace() {
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
    this.raceStorage.generalConfig.lapsPerRace = Math.ceil(roundsPerRace);
    this.calculateFuelPerRace();
  }

  validateData(field: 'minutes' | 'seconds' | 'milliSeconds' | 'fuelPerLap', maxTime: number) {
    const value = this.lapTimeModel()[field];
    const correctedTime = Math.min(maxTime, Math.max(0, value));

    this.lapTimeModel.update((state) => ({
      ...state,
      [field]: correctedTime,
    }));

    this.saveLapConfig();
    this.calculateLapsPerRace();
  }
}
