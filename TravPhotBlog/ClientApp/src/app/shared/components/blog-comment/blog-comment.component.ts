import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';
import { BlogCommentService } from '../../../core/services/blog-comment.service';
import { UserService } from '../../../core/services/user.service';
import { BlogComment } from '../../../core/models/blog-comment';
import { BlogCommenter } from '../../../core/models/blog-commenter';

@Component({
  selector: 'blog-comment',
  templateUrl: './blog-comment.component.html',
  styleUrls: ['./blog-comment.component.css']
})
export class BlogCommentComponent implements OnInit {
  private blogId: number;
  private commentParentId: number;
  comments: BlogComment[];
  commentForm: FormGroup;
  author: FormControl;
  email: FormControl;
  website: FormControl;
  comment: FormControl;
  status: boolean;

  constructor(private route: ActivatedRoute, private commentService: BlogCommentService, private userService: UserService, private fb: FormBuilder) {
    this.commentParentId = 0;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.blogId = Number(params.get('blogId'));
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
    let user = new BlogCommenter();
    let userComment = new BlogComment();
    user.Name = author;
    user.Email = email;
    user.Website = website;
    userComment.Comment = comment;
    userComment.PostId = this.blogId;
    userComment.ParentId = this.commentParentId;
    this.userService.postBlogCommenter(user).pipe(
      mergeMap(commtr => {
        userComment.UserId = commtr.Id;
        return this.commentService.postComment(userComment);
      })
    ).subscribe(stat => {
      this.status = stat;
    });
  }

  ngOnInit() {
    this.commentService.getComments(this.blogId).subscribe((res) => {
      this.comments = res;
    });
    this.createForm();
  }

  public setCommentParent(id: number) {
    this.commentParentId = id;
  }
}
