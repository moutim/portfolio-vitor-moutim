import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuIsOpen: boolean = false;

  downloadCurriculum() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/VITOR_MOUTIM_CURRICULO.pdf');
    link.setAttribute('download', 'VITOR_MOUTIM_CURRICULO.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
