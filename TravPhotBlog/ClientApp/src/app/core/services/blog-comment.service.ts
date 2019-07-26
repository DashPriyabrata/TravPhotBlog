import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../configs/constants';

import { BlogComment } from '../models/blog-comment';

@Injectable({
  providedIn: 'root'
})
export class BlogCommentService {
  //variable initialization
  commentApiURL: string = Constants.API_ROOT_URL + '/BlogInfo/Comments/';

  constructor(private httpClient: HttpClient) { }

  public getComments(blogId: string) {
    return this.httpClient.get<BlogComment[]>(this.commentApiURL + blogId);
  }
}
