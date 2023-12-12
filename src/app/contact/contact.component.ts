import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
  contactheader!: HTMLDivElement;
  contactcontent!: HTMLDivElement;
  contacttextandformcontainer!: HTMLDivElement;

  constructor(private router: Router) {
    document.addEventListener('DOMContentLoaded', () => {
      this.checkWindowWidth();
    });
    window.addEventListener('resize', () => {
      this.checkWindowWidth();
    });
  }

  ngAfterViewInit(): void {
    this.privacypolicycheck = <HTMLInputElement>document.getElementById('privacy-policy-check');
    this.submitbutton = <HTMLButtonElement>document.querySelector('.submit-button');
    this.contactform = <HTMLFormElement>document.querySelector('.contact-form');
    this.contactforminputcontainer = document.querySelector('.contact-form-input-container');
    this.sendmailresponse = <HTMLDivElement>document.querySelector('.send-mail-response');
    this.contactheader = <HTMLDivElement>document.querySelector('.contact-header');
    this.contactcontent = <HTMLDivElement>document.querySelector('.contact-content');
    this.contacttextandformcontainer = <HTMLDivElement>document.querySelector('.contact-text-and-form-container');
  }

  state() {
    if (this.privacypolicycheck.checked === true) {
      this.buttonactive();
      this.submitbutton.classList.remove('privacy-policy-unchecked');
    } else {
      this.buttoninactive();
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
    this.buttoninactive();
    this.privacypolicycheck.setAttribute('disabled', 'true');
  }

  enableForm() {
    this.contactforminputcontainer.childNodes.forEach((element: any) => {
      element.removeAttribute('disabled');
    });
    this.buttonactive();
    this.privacypolicycheck.removeAttribute('disabled');
  }

  buttonactive() {
    this.submitbutton.removeAttribute('disabled');
    this.submitbutton.style.cursor = 'pointer';
    this.submitbutton.classList.add('submit-button-hover');
  }

  buttoninactive() {
    this.submitbutton.setAttribute('disabled', 'true');
    this.submitbutton.style.cursor = 'not-allowed';
    this.submitbutton.classList.remove('submit-button-hover');
  }

  checkResponse(response: any) {
    if (response.ok) {
      this.responseOK();
    } else {
      this.responseError();
    }
  }

  async fetchFormspree(fd: FormData) {
    return await fetch('https://formspree.io/f/xqkvvoen', {
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

  setMarginofContactTextAndFormContainer() {
    this.contacttextandformcontainer.style.marginTop = this.contactheader.offsetHeight + 25 + 'px';
  }

  setMargintoStandartofContactTextAndFormContainer() {
    this.contacttextandformcontainer.style.marginTop = '0px';
  }

  checkWindowWidth() {
    if (window.innerWidth < 1200 && window.innerWidth > 500) {
      this.setMarginofContactTextAndFormContainer();
    } else {
      this.setMargintoStandartofContactTextAndFormContainer();
    }
  }

  changeRoutetoDSGVO() {
    this.router.navigate(['/DSGVO']);
    window.scrollTo({ top: 0});
  }

}