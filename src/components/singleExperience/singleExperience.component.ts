import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { LabelWithIconComponent } from '../labelWithIcon/labelWithIcon.component';

@Component({
  selector: 'SingleExperience',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, LabelWithIconComponent],
  templateUrl: './singleExperience.component.html',
  styleUrl: './singleExperience.component.css',
})
export class SingleExperienceComponent {
  @Input({ required: true })
  company!: string;

  @Input()
  companyLink!: string;

  @Input({ required: true })
  startDate!: string;

  @Input()
  endDate: string = 'now';

  @Input()
  description!: string;

  @Input({ required: true })
  position!: string;

  @Input()
  location!: string;

  @Input()
  technologiesInvolved!: string[];
}
