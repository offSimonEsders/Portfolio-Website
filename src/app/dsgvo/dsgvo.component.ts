import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-dsgvo',
    standalone: true,
    templateUrl: './dsgvo.component.html',
    styleUrl: './dsgvo.component.scss',
    imports: [HeaderComponent]
})
export class DsgvoComponent {

}
