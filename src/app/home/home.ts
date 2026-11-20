import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RaceStorage } from '../services/race-storage';
import { form, FormField, max, min } from '@angular/forms/signals';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { tracks } from '../../data/tracks';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

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
  raceStorage = inject(RaceStorage);
  driverCountInput = 1;
  tracks = tracks;

  racetimeModel = signal({
    hours: 0,
    minutes: 0,
  });

  onTeamRaceChange(value: boolean) {
    this.raceStorage.general.teamRace = value;
  }

  raceTimeForm = form(this.racetimeModel, (path) => {
    min(path.hours, 0);
    max(path.hours, 23);

    min(path.minutes, 0);
    max(path.minutes, 59);
  });

  saveRaceTime() {
    this.raceStorage.general.raceLengthHour = this.racetimeModel().hours;
    this.raceStorage.general.raceLengthMinutes = this.racetimeModel().minutes;
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
  get selectedTrack() {
    return this.tracks.find((track) => track.name === this.raceStorage.general.track);
  }

  get selectedVariant() {
    return this.selectedTrack?.variants.find(
      (variant) => variant.name === this.raceStorage.general.trackVariant,
    );
  }
  resetTrackSelection() {
    this.raceStorage.general.trackVariant = '';
    this.raceStorage.general.trackLayout = '';
  }
}
