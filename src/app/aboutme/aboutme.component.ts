import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent implements AfterViewInit {

  aboutmeframe!: HTMLDivElement;
  aboutmetext!: HTMLDivElement;
  bigimgframe!: HTMLDivElement;

  constructor() {

  }
  ngAfterViewInit(): void {
    this.aboutmeframe = <HTMLDivElement>document.querySelector('.aboutme-frame');
    this.aboutmetext = <HTMLDivElement>document.querySelector('.aboutme-text');
    this.bigimgframe = <HTMLDivElement>document.querySelector('.big-img-frame');
    this.setFrameHeight();
    
    window.addEventListener('resize', () => {
      this.setFrameHeight();
    });

  }

  setFrameHeight() {
    this.aboutmeframe.style.height = (this.aboutmetext.offsetHeight + this.bigimgframe.offsetHeight) + 127 + 'px';
  }

}
