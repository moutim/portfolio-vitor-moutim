import { Component } from '@angular/core';
import skills from '../../utils/skills';
import ITranslate from '../../interfaces/ITranslate';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  languageFile: ITranslate = this.translateService.languageFile;
  skillsInfo = skills;

  constructor(
    private translateService: TranslateService
  ) { }
}
