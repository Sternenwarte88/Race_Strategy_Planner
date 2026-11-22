import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, max, min } from '@angular/forms/signals';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { tracks } from '../../data/tracks';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { DataStorageService } from '../services/dataStorageService';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    FormField,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatLabel,
    MatRadioGroup,
    MatRadioButton,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //#region variables
  dataStorageService = inject(DataStorageService);
  generalDataService = this.dataStorageService.generalDataService;
  driverCountInput = 1;
  tracks = tracks;

  racetimeModel = signal({
    hours: this.generalDataService.getRaceLengthHour(),
    minutes: this.generalDataService.getRaceLengthMinutes(),
  });

  raceTimeForm = form(this.racetimeModel, (path) => {
    min(path.hours, 0);
    max(path.hours, 23);

    min(path.minutes, 0);
    max(path.minutes, 59);
  });
  //#endregion
  //#region getter/setter
  get driverName() {
    return this.generalDataService.getDriverName();
  }
  set driverName(value: string) {
    this.generalDataService.saveGeneralConfig({ driverName: value });
  }
  get driverCount() {
    return this.generalDataService.getDriverCount();
  }
  set driverCount(value: number) {
    this.generalDataService.saveGeneralConfig({ driverCount: value });
  }

  get teamRace() {
    return this.generalDataService.getTeamRace();
  }

  set teamRace(value: boolean) {
    this.generalDataService.saveGeneralConfig({ teamRace: value });
  }

  get track() {
    return this.generalDataService.getTrack();
  }

  set track(value: string) {
    this.generalDataService.saveGeneralConfig({ track: value });
  }

  get trackVariant() {
    return this.generalDataService.getTrackVariant();
  }

  set trackVariant(value: string) {
    this.generalDataService.saveGeneralConfig({ trackVariant: value });
  }
  get trackLayout() {
    return this.generalDataService.getTrackLayout();
  }

  set trackLayout(value: string) {
    this.generalDataService.saveGeneralConfig({ trackLayout: value });
  }

  get selectedTrack() {
    return this.tracks.find((track) => track.name === this.generalDataService.getTrack());
  }

  get selectedVariant() {
    return this.selectedTrack?.variants.find(
      (variant) => variant.name === this.generalDataService.getTrackVariant(),
    );
  }

  //#endregion

  saveRaceTime() {
    this.generalDataService.saveGeneralConfig({
      raceLengthHour: this.racetimeModel().hours,
      raceLengthMinutes: this.racetimeModel().minutes,
    });
  }

  validateTime(field: 'hours' | 'minutes', maxTime: number) {
    const value = this.racetimeModel()[field];
    const correctedTime = Math.min(maxTime, Math.max(0, value));

    this.racetimeModel.update((state) => ({
      ...state,
      [field]: correctedTime,
    }));

    this.saveRaceTime();
  }

  resetTrackSelection() {
    this.generalDataService.saveGeneralConfig({
      trackVariant: '',
      trackLayout: '',
    });
  }
}
