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
    this.languageFile = enUS;

    // if (language == 'pt-BR') {
    //   console.log('here');

    //   this.language = 'en-US';
    //   this.languageFile = enUS;
    // } else {
    //   console.log('aqui');
    //   this.language = 'pt-BR';
    //   this.languageFile = ptBR;
    // }
  }
}
