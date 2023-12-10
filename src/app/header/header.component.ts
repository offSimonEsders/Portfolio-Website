import { NgFor } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  burgermenucheckbox!: HTMLInputElement;
  menucontainer!: HTMLDivElement;

  constructor(private router: Router) { }
  ngAfterViewInit(): void {
    this.burgermenucheckbox = <HTMLInputElement>document.getElementById('burger-menu-checkbox');
    this.menucontainer = <HTMLDivElement>document.querySelector('.menu-container');
    this.changeMenuVisibility();
  }

  scrollToTop() {
    this.setRoute();
    window.scrollTo({ top: 0 });
  }

  scrollToAbout() {
    let element = document.getElementById('aboutme');
    if (element) {
      let Coordinate = element.getBoundingClientRect().top + window.pageYOffset;
      if (window.innerWidth <= 1100) {
        Coordinate -= 111;
      }
      window.scrollTo({ top: Coordinate });
    } else {
      this.scrollToElementinHome(this.scrollToAbout);
    }
    this.closeMenu();
  }

  scrollToSkills() {
    this.setupForScrollTo('myskills');
  }

  scrollToProjects() {
    this.setupForScrollTo('projects');
  }

  scrollToContact() {
    this.setupForScrollTo('contact');
  }

  setupForScrollTo(id: string) {
    let element = document.getElementById(id);
    if (element) {
      this.scrollToCoordinate(element);
    } else {
      this.scrollToElementinHome(this.scrollToContact);
    }
    this.closeMenu();
  }

  scrollToCoordinate(element: HTMLElement) {
    const Coordinate = element.getBoundingClientRect().top + window.pageYOffset - 111;
    window.scrollTo({ top: Coordinate });
  }

  scrollToElementinHome(callBack: Function) {
    this.setRoute();
    setTimeout(() => {
      callBack();
    }, 100);
  }

  setRoute() {
    this.router.navigate(['/']);
  }

  changeMenuVisibility() {
    this.burgermenucheckbox.onchange = () => {
      if (this.burgermenucheckbox.checked) {
        this.menucontainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      } else {
        this.menucontainer.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
  }

  closeMenu() {
    this.burgermenucheckbox.checked = false;
    this.menucontainer.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

}
