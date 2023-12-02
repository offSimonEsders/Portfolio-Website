import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { IntroductionComponent } from "../introduction/introduction.component";
import { AboutmeComponent } from "../aboutme/aboutme.component";
import { SkillsComponent } from "../skills/skills.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, IntroductionComponent, AboutmeComponent, SkillsComponent, PortfolioComponent, ContactComponent]
})
export class HomeComponent {

}
