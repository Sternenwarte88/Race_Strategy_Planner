import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabGroup, MatTabNav, MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, MatButtonModule, MatTabsModule, MatTabNav, RouterLinkActive, RouterOutlet],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {}
