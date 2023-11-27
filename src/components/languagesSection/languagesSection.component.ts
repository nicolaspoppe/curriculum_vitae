import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ILanguage } from '../../types/ILanguage';
import { LabelWithIconComponent } from '../LabelWithIcon/labelWithIcon.component';

@Component({
  selector: 'LanguagesSection',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, LabelWithIconComponent],
  templateUrl: './languagesSection.component.html',
  styleUrl: './languagesSection.component.css',
})
export class LanguagesSectionComponent {
  allLanguages: ILanguage[] = [
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/197/197560.png',
      language: 'Français',
      level: 'Langue maternelle',
    },
    {
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/768px-United-kingdom_flag_icon_round.svg.png',
      language: 'English',
      level: 'B2',
    },
  ];
}
