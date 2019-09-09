import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
  commentForm: FormGroup;
  author: FormControl;
  email: FormControl;
  website: FormControl;
  comment: FormControl;

  constructor(private route: ActivatedRoute, private commentService: BlogCommentService, private fb: FormBuilder) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.blogId = params.get('blogId');
    });
  }

  createForm() {
    this.author = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.website = new FormControl('');
    this.comment = new FormControl('', Validators.required);
    this.commentForm = this.fb.group({
      author: this.author,
      email: this.email,
      website: this.website,
      comment: this.comment
    });
  }

  onFormSubmit(author, email, website, comment) {
    alert('Your Input is : ' + author + ' ' + email + ' ' + website + ' ' + comment);
  }

  ngOnInit() {
    this.commentService.getComments(this.blogId).subscribe((res) => {
      this.comments = res;
    });
    this.createForm();
  }
}
