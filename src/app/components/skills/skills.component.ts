import { Component } from '@angular/core';
import skills from '../../utils/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillsInfo = skills;
}
