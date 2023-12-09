import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { LabelWithIconComponent } from '../../components/labelWithIcon/labelWithIcon.component';
import { DrawerDividerComponent } from '../../components/drawerDivider/drawerDivider.component';
import { LanguagesSectionComponent } from '../languagesSection/languagesSection.component';

@Component({
  selector: 'Drawer',
  standalone: true,
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    LabelWithIconComponent,
    DrawerDividerComponent,
    LanguagesSectionComponent,
  ],
})
export class DrawerComponent {
  name: string = 'Nicolas Poppe';
  email: string = 'NicolasPoppe123@gmail.com';
  house: string = 'Meise, 1860 in Belgium';
  permisA1: string = 'Class A1 License';
  permisB: string = 'Class B License';
}
