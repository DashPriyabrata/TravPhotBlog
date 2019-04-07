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
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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
    nav: true
  }

  constructor(private socialService: SocialService) { }

  ngOnInit() {
    this.socialService.getInstagramRecentMedia().subscribe((res) => {
      this.instaPosts = res;
    });
  }
}
