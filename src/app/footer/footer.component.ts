import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router ) {
    
  }

  changeRoutetoImprint() {
    this.router.navigate(['/Imprint']);
    window.scrollTo({ top: 0});
  }

  changeRoutetoDSGVO() {
    this.router.navigate(['/DSGVO']);
    window.scrollTo({ top: 0});
  }

}
