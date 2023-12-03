import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  scrollToTop() {
    this.setRoute();
    window.scrollTo({ top: 0 });
  }

  scrollToAbout() {
    let element = document.getElementById('aboutme');
    if (element) {
      element.scrollIntoView({ block: 'start' });
    } else {
      this.setRoute();
      setTimeout(() => {
        this.scrollToAbout();
      }, 100);
    }
  }

  scrollToSkills() {
    let element = document.getElementById('myskills');
    if (element) {
      const Coordinate = element.getBoundingClientRect().top + window.pageYOffset - 250;
      window.scrollTo({ top: Coordinate });
    } else {
      this.setRoute();
      setTimeout(() => {
        this.scrollToSkills();
      }, 100);
    }
  }

  scrollToProjects() {
    let element = document.getElementById('projects');
    if (element) {
      const Coordinate = element.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: Coordinate });
    } else {
      this.setRoute();
      setTimeout(() => {
        this.scrollToProjects();
      }, 100);
    }
  }

  setRoute() {
    this.router.navigate(['/']);
  }

}
