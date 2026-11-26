import { Component, inject } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { GeneralConfig } from '../../data/general';
import { DataStorageService } from '../services/dataStorageService';

@Component({
  selector: 'app-summary',
  imports: [MatCard, MatCardHeader, MatCardContent],
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary {
  dataStorage: DataStorageService = inject(DataStorageService);
}
