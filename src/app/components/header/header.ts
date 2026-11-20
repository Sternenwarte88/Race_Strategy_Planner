import { Component } from '@angular/core';
import { Navigation } from '../../navigation/navigation';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  imports: [Navigation, MatDivider],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
