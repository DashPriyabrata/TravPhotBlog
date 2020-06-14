import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../core/configs/constants';

import { BlogPost } from '../models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class FavouritePostsService {
  //variable initialization
  favouriteApiURL: string = Constants.API_ROOT_URL + '/BlogHome/Favourite';

  constructor(private httpClient: HttpClient) { }

  public getFavouritePosts() {
    return this.httpClient.get<BlogPost[]>(this.favouriteApiURL);
  }
}
