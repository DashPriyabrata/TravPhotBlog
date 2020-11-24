import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private scrollDispatcher: ScrollDispatcher) { }

  ngOnInit() {
    this.scrollDispatcher.scrolled().subscribe(x => {
      $("#header").addClass("sayit_sticky_menu");
    });

    $(document).ready(function () {
      $("#header").addClass("sayit_sticky_menu");
      $("#instapost-container").css("transform", "scale(0)");
      $("#footer").css("transform", "scale(0)");
      $(".sayit_image_cont").each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-src') + ')');
      });
    });

    if (window.innerWidth <= 737) {
      $("#header").css("background", "grey");
      $(".sayit_menu_mobile").css("background", "transparent");
    };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 737) {
      $("#header").css("background", "grey");
    }
    else {
      $("#header").css("background", "");
    }
  }
}
