import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  numberAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'LabelWithIcon',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule],
  templateUrl: './labelWithIcon.component.html',
  styleUrl: './labelWithIcon.component.css',
})
export class LabelWithIconComponent {
  @Input()
  iconLabel!: string;

  @Input()
  iconColor: string = 'black';

  @Input()
  iconSize: string = '24';

  @Input({ transform: numberAttribute })
  marginLeft: number = 0;

  @ContentChild('label')
  label!: TemplateRef<any>;
}
