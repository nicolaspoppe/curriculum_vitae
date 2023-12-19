import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
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
  initialHeight: number | undefined;
  @Input()
  sectionTitle!: string;

  @ContentChild('content')
  content!: TemplateRef<any>;

  public getContentId = () => 'closeable-content-' + this.sectionTitle;

  public changeIsOpen = () => {
    this.isOpen = !this.isOpen;
    const element = document.getElementById(this.getContentId());
    if (!this.isOpen) {
      element!.style.height = '0px';
      element!.style.overflowY = 'hidden';
      element!.style.opacity = '0';
    } else {
      element!.style.height = this.initialHeight + 'px';
      element!.style.opacity = '1';
    }
  };

  ngAfterViewInit() {
    const element = document?.getElementById(this.getContentId());
    this.initialHeight = element!.offsetHeight / 2;
    element!.style.height = this.initialHeight + 'px';
  }
}
