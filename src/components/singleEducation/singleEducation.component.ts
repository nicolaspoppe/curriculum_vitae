import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { LabelWithIconComponent } from '../labelWithIcon/labelWithIcon.component';

@Component({
  selector: 'SingleEducation',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, LabelWithIconComponent],
  templateUrl: './singleEducation.component.html',
  styleUrl: './singleEducation.component.css',
})
export class SingleEducationComponent {
  @Input({ required: true })
  school!: string;

  @Input()
  schoolLink!: string;

  @Input({ required: true })
  startDate!: string;

  @Input()
  endDate: string = 'now';

  @Input()
  description!: string;

  @Input({ required: true })
  diploma!: string;

  @Input({ required: true })
  location!: string;

  @Input()
  distinction!: string;
}
