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
  contactform!: HTMLFormElement;
  contactforminputcontainer: any;
  sendmailresponse!: HTMLDivElement;

  constructor() {

  }

  ngAfterViewInit(): void {
    this.privacypolicycheck = <HTMLInputElement>document.getElementById('privacy-policy-check');
    this.submitbutton = <HTMLButtonElement>document.querySelector('.submit-button');
    this.contactform = <HTMLFormElement>document.querySelector('.contact-form');
    this.contactforminputcontainer = document.querySelector('.contact-form-input-container');
    this.sendmailresponse = <HTMLDivElement>document.querySelector('.send-mail-response');
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

  async sendmail(event: any) {
    event.preventDefault();
    let fd = new FormData(event.target);
    let response = await this.fetchFormspree(fd);
    this.clearForm();
    this.disableForm();
    await this.checkResponse(response);
    this.enableForm();
  }

  clearForm() {
    this.contactform.reset();
  }

  disableForm() {
    this.contactforminputcontainer.childNodes.forEach((element: any) => {
      element.setAttribute('disabled', 'true');
    });
    this.submitbutton.setAttribute('disabled', 'true');
    this.privacypolicycheck.setAttribute('disabled', 'true');
  }

  enableForm() {
    this.contactforminputcontainer.childNodes.forEach((element: any) => {
      element.removeAttribute('disabled');
    });
    this.submitbutton.removeAttribute('disabled');
    this.privacypolicycheck.removeAttribute('disabled');
  }

  checkResponse(response: any) {
    if (response.ok) {
      this.responseOK();
    } else {
      this.responseError();
    }
  }

  async fetchFormspree(fd: FormData) {
    return await fetch('https://formspree.io/f/moqoozva', {
      method: 'POST', body: fd, headers: {
        'Accept': 'application/json'
      }
    });
  }

  responseOK() {
    this.sendmailresponse.textContent = 'Message sent successfully!';
    this.playAnimation();
  }

  responseError() {
    this.sendmailresponse.textContent = 'Message could not be sent!';
    this.playAnimation();
  }

  playAnimation() {
    this.sendmailresponse.style.display = 'flex';
    setTimeout(() => {
      this.sendmailresponse.style.display = 'none';
    }, 4000);
  }

}