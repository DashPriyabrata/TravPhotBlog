import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../core/configs/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //variable initialization
  private bloggerValidateApiURL: string = Constants.API_ROOT_URL + '/Blogger/Validate?token=';
  private currentUserSubject: BehaviorSubject<SocialUser>;
  public currentUser: Observable<SocialUser>;

  constructor(private authService: SocialAuthService, private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<SocialUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): SocialUser {
    return this.currentUserSubject.value;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  saveCurrentUser(user: SocialUser) {
    if (user && user.idToken) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }
    else {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }
  }

  checkCurrentUser(token: string) {
    return this.httpClient.get<boolean>(this.bloggerValidateApiURL + token)
  }
}
