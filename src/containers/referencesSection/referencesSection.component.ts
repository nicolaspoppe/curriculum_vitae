import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LabelWithIconComponent } from '../../components/labelWithIcon/labelWithIcon.component';
import { CloseableSectionComponent } from '../closeableSection/closeableSection.component';
import { SingleReferenceComponent } from '../../components/singleReference/singleReference.component';

@Component({
  selector: 'ReferencesSection',
  standalone: true,
  templateUrl: './referencesSection.component.html',
  styleUrl: './referencesSection.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    LabelWithIconComponent,
    CloseableSectionComponent,
    SingleReferenceComponent,
  ],
})
export class ReferencesSectionComponent {}
