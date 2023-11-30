import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { IntroductionComponent } from "../introduction/introduction.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, IntroductionComponent]
})
export class HomeComponent {

}
