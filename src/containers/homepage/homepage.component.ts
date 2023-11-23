import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from '../drawer/drawer.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'HomePage',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DrawerComponent, MatIconModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomePageComponent {
  
}
