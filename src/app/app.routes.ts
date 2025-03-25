import {Routes} from '@angular/router';
import {RedirectComponent} from './redirect/redirect.component';
import {LoginGoogleComponent} from './login-google/login-google.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginGoogleComponent
  },
  {
    path: "redirect",
    component: RedirectComponent,
  }
];
