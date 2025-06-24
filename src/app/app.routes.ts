import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './error/error.component';
import { AbautMeComponent } from './components/abaut-me/abaut-me.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'abautMe', component: AbautMeComponent},
    {path: 'contacto', component: ContactanosComponent},
    { path: '**', component: ErrorComponent }
];
