import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'DrawerDivider',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './drawerDivider.component.html',
  styleUrl: './drawerDivider.component.css'
})
export class DrawerDividerComponent {

}
