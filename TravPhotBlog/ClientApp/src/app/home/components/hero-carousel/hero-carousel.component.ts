import { Component, OnInit } from '@angular/core';
import { FeaturedPostsService } from '../../../core/services/featured-posts.service';

import { BlogPost } from '../../../core/models/blog-post';

@Component({
  selector: 'hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})
export class HeroCarouselComponent implements OnInit {
  featuredPosts: BlogPost[];


  constructor(private featuredPostsService: FeaturedPostsService) { }

  ngOnInit() {
    this.featuredPostsService.getFeaturedPosts().subscribe((res) => {
      this.featuredPosts = res;
      //debugger;
    });
  }

}
