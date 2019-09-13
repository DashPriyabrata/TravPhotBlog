import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../configs/constants';
import { BlogCommenter } from '../models/blog-commenter';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //variable initialization
  userApiURL: string = Constants.API_ROOT_URL + '/User/Add';

  constructor(private httpClient: HttpClient) { }

  public postBlogCommenter(commenter: BlogCommenter) {
    return this.httpClient.post<BlogCommenter>(this.userApiURL, commenter);
  }
}
