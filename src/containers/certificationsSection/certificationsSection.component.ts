import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LabelWithIconComponent } from '../../components/labelWithIcon/labelWithIcon.component';
import { CloseableSectionComponent } from '../closeableSection/closeableSection.component';

@Component({
  selector: 'CertificationsSection',
  standalone: true,
  templateUrl: './certificationsSection.component.html',
  styleUrl: './certificationsSection.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    LabelWithIconComponent,
    CloseableSectionComponent,
  ],
})
export class CertificationsSectionComponent {}
