import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-skill',
  templateUrl: './card-skill.component.html',
  styleUrl: './card-skill.component.css',
  encapsulation: ViewEncapsulation.None,

})
export class CardSkillComponent {
  @Input() src: string = '';
  @Input() name: string = '';
}
