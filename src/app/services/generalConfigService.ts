import { inject, Injectable } from '@angular/core';
import { GeneralConfig } from '../../data/general';
import { RaceStorage } from './race-storage';

@Injectable({
  providedIn: 'root',
})
export class GeneralConfigService {
  private generalData = inject(RaceStorage);

  public saveGeneralConfig(data: Partial<GeneralConfig>) {
    Object.assign(this.generalData.generalConfig, data);
  }

  public getDriverCount() {
    return this.generalData.generalConfig.driverCount;
  }
  public getDriverName() {
    return this.generalData.generalConfig.driverName;
  }
  public getTrack() {
    return this.generalData.generalConfig.track;
  }
  public getTrackLayout() {
    return this.generalData.generalConfig.trackLayout;
  }
  public getTrackVariant() {
    return this.generalData.generalConfig.trackVariant;
  }
  public getRaceLengthHour() {
    return this.generalData.generalConfig.raceLengthHour;
  }
  public getRaceLengthMinutes() {
    return this.generalData.generalConfig.raceLengthMinutes;
  }
  public getLapsPerRace() {
    return this.generalData.generalConfig.lapsPerRace;
  }
  public getTeamRace() {
    return this.generalData.generalConfig.teamRace;
  }
  public getMedianLapMs() {
    return this.generalData.generalConfig.medianLapMs;
  }
  public getMedianLapS() {
    return this.generalData.generalConfig.medianLabSec;
  }
  public getMedianLapM() {
    return this.generalData.generalConfig.medianLapMin;
  }
}
