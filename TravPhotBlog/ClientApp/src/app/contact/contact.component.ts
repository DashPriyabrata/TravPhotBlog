import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { TrendingPostsService } from '../core/services/trending-posts.service';
import { ImageService } from '../core/services/image.service';
import { BlogPost } from '../core/models/blog-post';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  trendingPosts: BlogPost[];
  country1Image: string;
  country2Image: string;

  constructor(private trendingPostsService: TrendingPostsService, private imgService: ImageService) { }

  ngOnInit(): void {
    this.trendingPostsService.getFavouritePosts().subscribe((res) => {
      this.trendingPosts = res;
      this.trendingPosts.forEach(obj => obj.TitleImage =
        this.imgService.getImageUrl(obj.TitleImage, "Post").replace(/ /g, "%20") + "?width=560&height=373");
      this.country1Image = this.imgService.getImageUrl(this.trendingPosts[0].Country + ".jpeg", "Clipart/Places")
        .replace(/ /g, "%20") + "?width=560&height=373";
      this.country2Image = this.imgService.getImageUrl(this.trendingPosts[1].Country + ".jpeg", "Clipart/Places")
        .replace(/ /g, "%20") + "?width=560&height=373";
    });
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('body').removeAttr('class data-bgcolor style');

      $(".sayit_title_container, .sayit_flipbox_front, .sayit_flipbox_back").each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-src') + ')');
      });
      $(".sayit_js_height").each(function () {
        $(this).css('height', $(this).attr('data-height'));
      });
    });
  }
}
