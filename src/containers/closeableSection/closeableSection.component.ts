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
  isNeededToRecalculateHeight: boolean = false;
  initialHeight: number | undefined;
  @Input()
  sectionTitle!: string;

  @ContentChild('content')
  content!: TemplateRef<any>;

  public getContentId = () => 'closeable-content-' + this.sectionTitle;

  public changeIsOpen = () => {
    this.isOpen = !this.isOpen;
    try {
      const element = document?.getElementById(this.getContentId());
      if (!this.isOpen) {
        element!.style.height = '0px';
        element!.style.overflowY = 'hidden';
        element!.style.opacity = '0';
      } else if (this.isNeededToRecalculateHeight) {
        this.recalculateHeight();
        element!.style.opacity = '1';
        this.isNeededToRecalculateHeight = false;
      } else {
        element!.style.height = this.initialHeight + 'px';
        element!.style.opacity = '1';
      }
    } catch (e) {}
  };

  recalculateHeight = () => {
    if (this.isOpen) {
      try {
        const element = document?.getElementById(this.getContentId());
        element!.style.height = 'auto';
        const updatedElement = document?.getElementById(this.getContentId());
        this.initialHeight = updatedElement!.offsetHeight;
        updatedElement!.style.height = this.initialHeight + 'px';
      } catch (e) {}
    } else {
      this.isNeededToRecalculateHeight = true;
    }
  };

  ngAfterViewInit() {
    try {
      const element = document?.getElementById(this.getContentId());
      this.initialHeight = element!.offsetHeight / 2;
      element!.style.height = this.initialHeight + 'px';
      window.addEventListener('resize', this.recalculateHeight);
    } catch (e) {}
  }
}
