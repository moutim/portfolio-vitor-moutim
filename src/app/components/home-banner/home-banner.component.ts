import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate/translate.service';
import ITranslate from '../../interfaces/ITranslate';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css'
})
export class HomeBannerComponent {
  languageFile: ITranslate = this.translateService.languageFile;

  constructor(
    private translateService: TranslateService
  ) { }
}
