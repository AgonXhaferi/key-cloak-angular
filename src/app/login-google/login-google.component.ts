import {Component} from '@angular/core';
import {AuthService} from '../service/auth/auth.service';

@Component({
  selector: 'app-login-google',
  imports: [],
  templateUrl: './login-google.component.html',
  styleUrl: './login-google.component.css'
})
export class LoginGoogleComponent {

  constructor(public authService: AuthService) {
  }

  googleLogin(){
    return this.authService.loginWithGoogle()
  }

}
