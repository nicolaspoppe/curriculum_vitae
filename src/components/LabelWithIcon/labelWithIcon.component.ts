import { Component, Input } from '@angular/core';
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
  label!: string;

  @Input()
  iconLabel!: string;
}
