import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { BlogCommentComponent } from '../shared/components/blog-comment/blog-comment.component';
import { ParentIdPipe } from '../shared/pipes/parent-id.pipe';

@NgModule({
  declarations: [PostComponent, BlogCommentComponent, ParentIdPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    //PostRoutingModule
  ]
})
export class PostModule { }
