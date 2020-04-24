import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { PrecisePostsService } from '../../../core/services/precise-posts.service';
import { ImageService } from '../../../core/services/image.service';
import { BlogPost } from '../../../core/models/blog-post';
declare var VanillaTilt;

@Component({
  selector: 'recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit, AfterViewInit {
  recentPosts: BlogPost[];

  constructor(private precisePostsService: PrecisePostsService, private imgService: ImageService) { }

  ngOnInit() {
    this.precisePostsService.getPrecisePosts(0, 6).subscribe((res) => {
      this.recentPosts = res;
      this.recentPosts.forEach(x => x.TitleImage = this.imgService.getImageUrl(x.TitleImage, "Post") + "?width=853&height=1280");
    });
  }

  ngAfterViewInit() {
    //VanillaTilt needs to initialize elements explicitly.  
    VanillaTilt.init(document.querySelectorAll(".sayit_parallax_mode"));

    //Explicitly setting html custom attributes. 
    $(".sayit_js_bg_image").each(function () {
      $(this).css('background-image', 'url(' + $(this).attr('data-src') + ')');
    });
    $(".sayit_js_color").each(function () {
      $(this).css('color', $(this).attr('data-color'));
    });
  }
}
