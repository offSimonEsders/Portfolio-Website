import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  
  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      const Coordinate = element.getBoundingClientRect().top + window.pageYOffset - 111;
      window.scrollTo({ top: Coordinate });
    }
  }

  scrollDown() {
    const element = document.getElementById('footer');
    if (element) {
      element.scrollIntoView({ block: 'start' });
    }
  }

}
