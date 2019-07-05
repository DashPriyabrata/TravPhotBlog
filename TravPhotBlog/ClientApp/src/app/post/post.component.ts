import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogInfoService } from '../core/services/blog-info.service';

import { BlogPost } from '../core/models/blog-post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private blogId: string;
  blogData: BlogPost;

  constructor(private route: ActivatedRoute, private blogInfoService: BlogInfoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.blogId = params.get('blogId');
      debugger
    });

    this.blogInfoService.getBlogInfo(this.blogId).subscribe((res) => {
      debugger;
      this.blogData = res;
    });
  }

}
