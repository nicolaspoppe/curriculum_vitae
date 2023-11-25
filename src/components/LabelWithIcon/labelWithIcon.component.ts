import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'LabelWithIcon',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule],
  templateUrl: './labelWithIcon.component.html',
  styleUrl: './labelWithIcon.component.css'
})
export class LabelWithIconComponent {
  @Input()
  iconLabel!: string;

  @ContentChild('label')
  label!: TemplateRef<any>;
}
