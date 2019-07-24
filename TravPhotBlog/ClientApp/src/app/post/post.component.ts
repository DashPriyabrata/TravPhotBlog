import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';
import { BlogInfoService } from '../core/services/blog-info.service';
import { BlogContentService } from '../core/services/blog-content.service';
import { BlogTagService } from '../core/services/blog-tag.service';
import { BlogPost } from '../core/models/blog-post';
import { PostContent } from '../core/models/post-content';
import { BlogTag } from '../core/models/blog-tag';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit {

  private blogId: string;
  blogData: BlogPost;
  postContent: PostContent;
  tags: BlogTag[];
  nextPost: BlogPost;
  prevPost: BlogPost;
  relatedPosts: BlogPost[];

  constructor(private route: ActivatedRoute, private blogInfoService: BlogInfoService, private blogContentService: BlogContentService, private blogTagService: BlogTagService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.blogId = params.get('blogId');
    });
  }

  ngOnInit() {
    this.blogInfoService.getBlogInfo(this.blogId).subscribe((res) => {
      this.blogData = res;
      
      this.blogContentService.getPostContent(this.blogData.ContentId).subscribe((res) => {
        this.postContent = res;
      });
      this.blogTagService.getTags(this.blogData.BlogTagId).subscribe((res) => {
        this.tags = res;
      });
      this.blogContentService.getPrevPost(this.blogData.BlogId).subscribe((res) => {
        this.prevPost = res;
      });
      this.blogContentService.getNextPost(this.blogData.BlogId).subscribe((res) => {
        this.nextPost = res;
      });
      this.blogContentService.getRelatedPosts(this.blogData.BlogTagId).subscribe((res) => {
        this.relatedPosts = res;
      });
    });
  }

  ngAfterViewInit() {
    $(".sayit_title_container").each(function () {
      $(this).css('background-image', 'url(' + $(this).attr('data-src') + ')');
    });
  }
}
