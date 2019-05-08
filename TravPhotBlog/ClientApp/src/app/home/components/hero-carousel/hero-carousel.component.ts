import { Component, OnInit } from '@angular/core';
import { FeaturedPostsService } from '../../../core/services/featured-posts.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { BlogPost } from '../../../core/models/blog-post';

@Component({
  selector: 'hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})
export class HeroCarouselComponent implements OnInit {
  featuredPosts: BlogPost[];


  constructor(private featuredPostsService: FeaturedPostsService, private _sanitizer: DomSanitizer, private loc: Location) { }

  ngOnInit() {
    this.featuredPostsService.getFeaturedPosts().subscribe((res) => {
      this.featuredPosts = res;
      //debugger;
    });
  }

}
