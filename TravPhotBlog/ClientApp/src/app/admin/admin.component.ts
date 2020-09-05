import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {
  userName: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.userName = this.authService.currentUserValue.name;
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $(".sayit_title_container").each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-src') + ')');
      });
      $(".sayit_js_height").each(function () {
        $(this).css('height', $(this).attr('data-height'));
      });
    });
  }

  signOut() {
    this.authService.signOut();
  }
}
