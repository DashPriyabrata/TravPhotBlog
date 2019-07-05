import { Component, OnInit } from '@angular/core';
import { FeaturedPostsService } from '../../../core/services/featured-posts.service';

import { BlogPost } from '../../../core/models/blog-post';

@Component({
  selector: 'featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.css']
})
export class FeaturedPostsComponent implements OnInit {
  featuredPosts: BlogPost[];
  constructor(private featuredPostsService: FeaturedPostsService) { }

  ngOnInit() {
    this.featuredPostsService.getFeaturedPosts().subscribe((res) => {
      this.featuredPosts = res;
      this.featuredPosts.forEach(obj => {
        var spiltImg = obj.TitleImage.split("upload/");
        obj.TitleImage = spiltImg[0] + "upload/c_fill,h_634,w_780/" + spiltImg[1];
      });
    });
  }

}
