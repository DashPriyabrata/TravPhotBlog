import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from "angularx-social-login";
//import { AuthenticationService } from '../core/services/authentication.service';
import { Constants } from '../core/configs/constants';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(Constants.GOOGLE_CLIENTID)
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ]
})
export class AuthModule { }
