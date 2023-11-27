import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LabelWithIconComponent } from '../../components/labelWithIcon/labelWithIcon.component';

@Component({
  selector: 'CloseableSection',
  standalone: true,
  templateUrl: './closeableSection.component.html',
  styleUrl: './closeableSection.component.css',
  imports: [CommonModule, RouterOutlet, LabelWithIconComponent],
})
export class CloseableSectionComponent {
  isOpen: boolean = true;
  public changeIsOpen: () => void = () => {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  };

  @Input()
  sectionTitle!: string;

  @ContentChild('content')
  content!: TemplateRef<any>;
}
