import { Component, OnInit } from '@angular/core';
import { SocialService } from '../../services/social.service';

import { InstaPost } from '../../models/instapost';

@Component({
  selector: 'instapost',
  templateUrl: './instapost.component.html',
  styleUrls: ['./instapost.component.css']
})
export class InstaPostComponent implements OnInit {
  instaPosts: InstaPost[];
  customOptions: any = {
    autoWidth: true,
    loop: true,
    margin: 2,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 4000,
    dotsSpeed: 500,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    center: true,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    },
    nav: false,
  }

  constructor(private socialService: SocialService) { }

  ngOnInit() {
    this.socialService.getInstagramRecentMedia().subscribe((res) => {
      this.instaPosts = res;
    });
  }
}
