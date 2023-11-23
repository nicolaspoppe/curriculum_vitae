import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { LabelWithIconComponent } from '../../components/LabelWithIcon/labelWithIcon.component';
import { DrawerDividerComponent } from '../../components/DrawerDivider/drawerDivider.component';

@Component({
  selector: 'Drawer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, LabelWithIconComponent, DrawerDividerComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  house:string = "Meise, 1860";
  permisA1: string = "Permis A1";
  permisB: string = "Permis B";
}
