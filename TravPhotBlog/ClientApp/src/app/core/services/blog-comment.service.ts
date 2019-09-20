import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../configs/constants';

import { BlogComment } from '../models/blog-comment';

@Injectable({
  providedIn: 'root'
})
export class BlogCommentService {
  //variable initialization
  private getCommentApiURL: string = Constants.API_ROOT_URL + '/BlogInfo/Comments/';
  private addCommentApiURL: string = Constants.API_ROOT_URL + '/BlogInfo/AddComment'

  constructor(private httpClient: HttpClient) { }

  public getComments(blogId: number) {
    return this.httpClient.get<BlogComment[]>(this.getCommentApiURL + blogId);
  }
  public postComment(comment: BlogComment) {
    return this.httpClient.post<boolean>(this.addCommentApiURL, comment);
  }
}
