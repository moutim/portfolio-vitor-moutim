import { Component } from '@angular/core';
import ITranslate from '../../interfaces/ITranslate';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuIsOpen: boolean = false;
  flag: string = '../../../assets/br.svg';
  flagMenu: string = '../../../assets/us.svg';
  toolTip: string = 'pt-BR';
  toolTipMenu: string = 'en-US';
  languageFile: ITranslate = this.translateService.languageFile;

  constructor(
    private translateService: TranslateService
  ) { }

  downloadCurriculum() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/VITOR_MOUTIM_PT-BR.pdf');
    link.setAttribute('download', 'VITOR_MOUTIM_PT-BR.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  changeLanguage() {
    const flag = this.flag;
    const toolTip = this.toolTip;

    this.flag = this.flagMenu;
    this.flagMenu = flag;
    this.toolTip = this.toolTipMenu;
    this.toolTipMenu = toolTip;

    console.log(this.toolTipMenu);
    this.translateService.changeLanguage(this.toolTipMenu);
  }
}
