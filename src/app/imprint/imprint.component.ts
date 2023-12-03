import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-imprint',
    standalone: true,
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss',
    imports: [HeaderComponent]
})
export class ImprintComponent {
  constructor(private router:Router) {

  }

  navigateHome() {
    this.router.navigate(['/']);
  }

}
