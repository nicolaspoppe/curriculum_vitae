import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LabelWithIconComponent } from '../../components/labelWithIcon/labelWithIcon.component';
import { CloseableSectionComponent } from '../closeableSection/closeableSection.component';
import { ITechnologies, ITechnology } from '../../types/ITechnology';

@Component({
  selector: 'SkillsSection',
  standalone: true,
  templateUrl: './skillsSection.component.html',
  styleUrl: './skillsSection.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    LabelWithIconComponent,
    CloseableSectionComponent,
  ],
})
export class SkillsSectionComponent {
  mainSkills: string[] = [
    'Continuous learning',
    'Adaptability',
    'Problem solving',
    'Open-mindness',
  ];
  technologies: ITechnologies = {
    frameworks: [
      {
        imageUrl:
          'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
        name: 'React',
      },
      {
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
        name: 'Vue.js',
      },
      {
        imageUrl:
          'https://seeklogo.com/images/N/nodejs-logo-D26404F360-seeklogo.com.png?v=638179441440000000',
        name: 'Node.js',
      },
      {
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png',
        name: 'NestJS',
      },
      {
        imageUrl:
          'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png',
        name: 'ExpressJS',
      },
    ],
    languages: [
      {
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png',
        name: 'JavaScript',
      },
      {
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
        name: 'TypeScript',
      },
      {
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
        name: 'HTML',
      },
      {
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png',
        name: 'CSS',
      },
      {
        imageUrl:
          'https://i.pinimg.com/originals/95/91/ed/9591ed82caa8d20c30db96cb7298d3a9.png',
        name: 'Python',
      },
      {
        imageUrl:
          'https://www.shareicon.net/data/512x512/2016/09/23/833700_windows_512x512.png',
        name: 'Java',
      },
      {
        imageUrl:
          'https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.png',
        name: 'SQL',
      },
    ],
  };
  softwares: ITechnology[] = [
    {
      imageUrl: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      name: 'Postman',
    },
    {
      imageUrl:
        'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format',
      name: 'Figma',
    },
    {
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5a0db00aa803bb3cf9879f92/1572420904141-IUYZOF19BTEJ3UFEFH6T/Drawio.png',
      name: 'Draw.io',
    },
    {
      imageUrl:
        'https://z6n9b7j4.rocketcdn.me/wp-content/uploads/2023/08/Jira-Icon-Website.png',
      name: 'Jira',
    },
    {
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968793.png',
      name: 'Confluence',
    },
    //TODO : add Bitbucket, Github, Gitlab, Git
  ];
}
