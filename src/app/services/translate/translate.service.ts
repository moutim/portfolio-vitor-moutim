import { Injectable } from '@angular/core';
import ptBR from '../../translate/pt-br';
import ITranslate from '../../interfaces/ITranslate';
import enUS from '../../translate/en-us';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  language: string = 'pt-BR';
  languageFile: ITranslate = ptBR;

  constructor() { }

  changeLanguage(language: string) {
    if (language == 'pt-BR') {
      this.language = 'en-US';
      this.languageFile = enUS;
    } else {
      this.language = 'pt-BR';
      this.languageFile = ptBR;
    }
  }
}
