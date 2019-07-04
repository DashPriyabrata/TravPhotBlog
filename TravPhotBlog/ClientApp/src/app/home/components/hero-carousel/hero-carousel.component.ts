import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { FeaturedPostsService } from '../../../core/services/featured-posts.service';

import { BlogPost } from '../../../core/models/blog-post';

@Component({
  selector: 'hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})
export class HeroCarouselComponent implements OnInit, AfterViewInit {
  featuredPosts: BlogPost[];

  constructor(private featuredPostsService: FeaturedPostsService) { }

  ngOnInit() {
    this.featuredPostsService.getFeaturedPosts().subscribe((res) => {
      this.featuredPosts = res;
    });
  }

  ngAfterViewInit() {
    $(".sayit_slider_item_wrapper").each(function () {
      $(this).css('background-image', 'url(' + $(this).attr('data-src') + ')');
    });
  }
}
