import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  scrollToAbout() {
    let element = document.getElementById('aboutme');
    if (element) {
      element.scrollIntoView({ block: 'start' });
    }
  }

  scrollToSkills() {
    let element = document.getElementById('myskills');
    if (element) {
      const Coordinate = element.getBoundingClientRect().top + window.pageYOffset - 250;
      window.scrollTo({ top: Coordinate });
    }
  }

  scrollToProjects() {
    let element = document.getElementById('projects');
    if (element) {
      const Coordinate = element.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: Coordinate });
    }
  }

}
