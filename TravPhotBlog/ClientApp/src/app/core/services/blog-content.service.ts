import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../configs/constants';

import { PostContent } from '../models/post-content';

@Injectable({
  providedIn: 'root'
})
export class BlogContentService {
  //variable initialization
  postContentApiURL: string = Constants.API_ROOT_URL + '/BlogInfo/PostContent/';
  
  constructor(private httpClient: HttpClient) { }

  public getPostContent(contentId: number) {
    
    return this.httpClient.get<PostContent>(this.postContentApiURL + contentId);
  }
}
