import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CloseableSectionComponent } from '../CloseableSection/closeableSection.component';
import { SingleExperienceComponent } from '../../components/SingleExperience/singleExperience.component';

@Component({
  selector: 'MainContent',
  standalone: true,
  templateUrl: './mainContent.component.html',
  styleUrl: './mainContent.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    CloseableSectionComponent,
    SingleExperienceComponent,
  ],
})
export class MainContentComponent {
  name: string = 'Nicolas Poppe';
}
