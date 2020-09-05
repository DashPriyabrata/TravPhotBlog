import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;

  constructor(private authService: AuthenticationService, private socialService: SocialAuthService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    $("#header").css("background", "black");
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.socialService.authState.subscribe((user) => {
      this.authService.checkCurrentUser(user.idToken).subscribe(stat => {
        if (stat) {
          this.authService.saveCurrentUser(user);
          this.router.navigateByUrl(this.returnUrl);
        }
      });
    });
  }

  signInGoogle(): void {
    this.authService.signInWithGoogle();
  }
}
