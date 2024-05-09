import { Component, Input } from '@angular/core';

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
}
