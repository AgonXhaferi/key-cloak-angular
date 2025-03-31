import {Injectable} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from '../../../config/auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  loginWithGoogle() {
    this.oauthService.initCodeFlow(undefined, {
      extras: {
        kc_idp_hint: 'google'
      }
    });
  }

  logout() {
    this.oauthService.logOut();
  }
}
