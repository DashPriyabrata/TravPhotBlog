import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogInfoService } from '../core/services/blog-info.service';
import * as $ from 'jquery';
import { BlogPost } from '../core/models/blog-post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit {

  private blogId: string;
  blogData: BlogPost;

  constructor(private route: ActivatedRoute, private blogInfoService: BlogInfoService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.blogId = params.get('blogId');
    });
  }

  ngOnInit() {
    this.blogInfoService.getBlogInfo(this.blogId).subscribe((res) => {
      this.blogData = res;
    });
  }
  ngAfterViewInit() {
    $(".sayit_title_container").each(function () {
      $(this).css('background-image', 'url(' + $(this).attr('data-src') + ')');
    });
  }
}
