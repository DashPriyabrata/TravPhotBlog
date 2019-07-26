import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { BlogCommentComponent } from '../shared/components/blog-comment/blog-comment.component';

@NgModule({
  declarations: [PostComponent, BlogCommentComponent],
  imports: [
    CommonModule
    //PostRoutingModule
  ]
})
export class PostModule { }
