import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { LabelWithIconComponent } from '../labelWithIcon/labelWithIcon.component';

@Component({
  selector: 'SingleReference',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    LabelWithIconComponent,
    LabelWithIconComponent,
  ],
  templateUrl: './singleReference.component.html',
  styleUrl: './singleReference.component.css',
})
export class SingleReferenceComponent {
  @Input({ required: true })
  company!: string;

  @Input({ required: true })
  companyLink!: string;

  @Input({ required: true })
  name!: string;

  @Input({ required: true })
  position!: string;

  @Input({ required: true })
  phone!: string;
}
