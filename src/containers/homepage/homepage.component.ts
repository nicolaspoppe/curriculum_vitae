import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from '../drawer/drawer.component';
import { MainContentComponent } from '../mainContent/mainContent.component';

@Component({
  selector: 'HomePage',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DrawerComponent,
    MatIconModule,
    MainContentComponent,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomePageComponent {}
