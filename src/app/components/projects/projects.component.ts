import { Component } from '@angular/core';
import projects from '../../utils/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectsInfo = projects;
}
