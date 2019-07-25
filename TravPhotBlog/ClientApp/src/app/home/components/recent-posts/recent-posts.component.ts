import { Component, OnInit } from '@angular/core';
import { PrecisePostsService } from '../../../core/services/precise-posts.service';

import { BlogPost } from '../../../core/models/blog-post';
declare var VanillaTilt;

@Component({
  selector: 'recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {
  recentPosts: BlogPost[];
  
  constructor(private precisePostsService: PrecisePostsService) { }

  ngOnInit() {
    //VanillaTilt needs to initialize elements explicitly.  
    VanillaTilt.init(document.querySelectorAll(".sayit_parallax_mode"));

    this.precisePostsService.getPrecisePosts(0, 6).subscribe((res) => {
      this.recentPosts = res;
    });
  }
}
