import { Component, Input } from '@angular/core';
import ITranslate from '../../interfaces/ITranslate';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {
  @Input() title: string = '';
  @Input() tech: string = '';
  @Input() description: string = '';
  @Input() repo: string = '';
  @Input() deploy: string = '';
  languageFile: ITranslate = this.translateService.languageFile;

  constructor(
    private translateService: TranslateService
  ) { }

  ngDoCheck() {
    this.languageFile = this.translateService.languageFile;
  }
}
