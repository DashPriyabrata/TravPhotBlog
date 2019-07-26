import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogCommentService } from '../../../core/services/blog-comment.service';
import { BlogComment } from '../../../core/models/blog-comment';

@Component({
  selector: 'blog-comment',
  templateUrl: './blog-comment.component.html',
  styleUrls: ['./blog-comment.component.css']
})
export class BlogCommentComponent implements OnInit {
  private blogId: string;
  comments: BlogComment[];

  constructor(private route: ActivatedRoute, private commentService: BlogCommentService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.blogId = params.get('blogId');
    });
  }

  ngOnInit() {
    this.commentService.getComments(this.blogId).subscribe((res) => {
      this.comments = res;
      debugger;
    });
  }
}
