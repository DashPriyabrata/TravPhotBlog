import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../configs/constants';

import { BlogPost } from '../models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class PrecisePostsService {
  //variable initialization
  preciseApiURL: string = Constants.API_ROOT_URL + '/BlogHome/Precise';

  constructor(private httpClient: HttpClient) { }

  public getPrecisePosts(startIndex: number, numOfPosts: number) {
    return this.httpClient.get<BlogPost[]>(this.preciseApiURL + "/" + startIndex + "/" + numOfPosts);
  }
}
