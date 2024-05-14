import { Component } from '@angular/core';
import ITranslate from '../../interfaces/ITranslate';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  languageFile: ITranslate = this.translateService.languageFile;

  constructor(
    private translateService: TranslateService
  ) { }

  ngDoCheck() {
    this.languageFile = this.translateService.languageFile;
  }
}
