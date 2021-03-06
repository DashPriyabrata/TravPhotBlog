import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../core/configs/constants';

import { BlogPost } from '../models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class FeaturedPostsService {
  //variable initialization
  featuredApiURL: string = Constants.API_ROOT_URL + '/BlogHome/Featured';

  constructor(private httpClient: HttpClient) { }

  public getFeaturedPosts() {
    return this.httpClient.get<BlogPost[]>(this.featuredApiURL);
  }
}
