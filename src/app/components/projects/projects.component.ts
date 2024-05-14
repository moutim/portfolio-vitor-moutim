import { Component } from '@angular/core';
import projects from '../../utils/projects';
import ITranslate from '../../interfaces/ITranslate';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectsInfo = projects;
  languageFile: ITranslate = this.translateService.languageFile;

  constructor(
    private translateService: TranslateService
  ) { }

  ngDoCheck() {
    this.languageFile = this.translateService.languageFile;
  }
}
