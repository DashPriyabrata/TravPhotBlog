import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../configs/constants';

import { PostContent } from '../models/post-content';
import { BlogPost } from '../models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogContentService {
  //variable initialization
  postContentApiURL: string = Constants.API_ROOT_URL + '/BlogInfo/PostContent/';
  nextPostApiURL: string = Constants.API_ROOT_URL + '/BlogInfo/NextPost/';
  prevPostApiURL: string = Constants.API_ROOT_URL + '/BlogInfo/PrevPost/';
  
  constructor(private httpClient: HttpClient) { }

  public getPostContent(contentId: number) {
    return this.httpClient.get<PostContent>(this.postContentApiURL + contentId);
  }
  public getNextPost(blogId: number) {
    return this.httpClient.get<BlogPost>(this.nextPostApiURL + blogId);
  }
  public getPrevPost(blogId: number) {
    return this.httpClient.get<BlogPost>(this.prevPostApiURL + blogId);
  }
}
