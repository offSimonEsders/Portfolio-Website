import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {

  privacypolicycheck!: HTMLInputElement;
  submitbutton!: HTMLButtonElement;

  constructor() {

  }

  ngAfterViewInit(): void {
    this.privacypolicycheck = <HTMLInputElement>document.getElementById('privacy-policy-check');
    this.submitbutton = <HTMLButtonElement>document.querySelector('.submit-button');
  }

  state() {
    if (this.privacypolicycheck.checked === true) {
      this.submitbutton.removeAttribute('disabled');
      this.submitbutton.classList.remove('privacy-policy-unchecked');
    } else {
      this.submitbutton.setAttribute('disabled', 'true');
      this.submitbutton.classList.add('privacy-policy-unchecked');
    }
  }

}
