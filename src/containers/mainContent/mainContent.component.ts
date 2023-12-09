import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CloseableSectionComponent } from '../closeableSection/closeableSection.component';
import { SingleExperienceComponent } from '../../components/singleExperience/singleExperience.component';
import { CertificationsSectionComponent } from '../certificationsSection/certificationsSection.component';
import { ReferencesSectionComponent } from '../referencesSection/referencesSection.component';
import { SingleEducationComponent } from '../../components/singleEducation/singleEducation.component';
import { SkillsSectionComponent } from '../skillsSection/skillsSection.component';

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
    CertificationsSectionComponent,
    ReferencesSectionComponent,
    SingleEducationComponent,
    SkillsSectionComponent,
  ],
})
export class MainContentComponent {
  name: string = 'Nicolas Poppe';
}
