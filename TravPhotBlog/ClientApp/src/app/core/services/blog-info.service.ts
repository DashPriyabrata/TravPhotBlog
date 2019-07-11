import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../configs/constants';

import { BlogPost } from '../models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogInfoService {
  //variable initialization
  blogInfoApiURL: string = Constants.API_ROOT_URL + '/BlogInfo';


  constructor(private httpClient: HttpClient) { }

  public getBlogInfo(blogId: string) {
    return this.httpClient.get<BlogPost>(this.blogInfoApiURL + "/" + blogId);
  }
}
