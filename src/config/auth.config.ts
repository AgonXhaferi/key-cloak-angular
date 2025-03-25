// auth.config.ts
import {AuthConfig} from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8080/realms/singularis',
  redirectUri: "http://localhost:4200/redirect",
  clientId: 'singularis-front-end',
  responseType: 'code',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
  showDebugInformation: true,
};
