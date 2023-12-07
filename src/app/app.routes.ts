import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DsgvoComponent } from './dsgvo/dsgvo.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'Imprint', component: ImprintComponent, pathMatch: 'full'},
    { path:'DSGVO', component: DsgvoComponent, pathMatch: 'full' }
];
