import { inject, Injectable } from '@angular/core';
import { GeneralConfig } from '../../data/general';
import { RaceStorage } from './race-storage';

@Injectable({
  providedIn: 'root',
})
export class GeneralConfigService {
  private generalData: RaceStorage = inject(RaceStorage);

  public saveGeneralConfig(data: Partial<GeneralConfig>): void {
    Object.assign(this.generalData.generalConfig, data);
  }

  public getDriverCount(): number {
    return this.generalData.generalConfig.driverCount;
  }
  public getDriverName(): string {
    return this.generalData.generalConfig.driverName;
  }
  public getTrack(): string {
    return this.generalData.generalConfig.track;
  }
  public getTrackLayout(): string {
    return this.generalData.generalConfig.trackLayout;
  }
  public getTrackVariant(): string {
    return this.generalData.generalConfig.trackVariant;
  }
  public getRaceLengthHour(): number {
    return this.generalData.generalConfig.raceLengthHour;
  }
  public getRaceLengthMinutes(): number {
    return this.generalData.generalConfig.raceLengthMinutes;
  }
  public getLapsPerRace(): number {
    return this.generalData.generalConfig.lapsPerRace;
  }
  public getTeamRace(): boolean {
    return this.generalData.generalConfig.teamRace;
  }
  public getMedianLapMs(): number {
    return this.generalData.generalConfig.medianLapMs;
  }
  public getMedianLapS(): number {
    return this.generalData.generalConfig.medianLabSec;
  }
  public getMedianLapM(): number {
    return this.generalData.generalConfig.medianLapMin;
  }
}
