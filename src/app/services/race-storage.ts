import { Injectable } from '@angular/core';
import { General } from '../../data/general';

@Injectable({
  providedIn: 'root',
})
export class RaceStorage {
  general: General = new General();
}
