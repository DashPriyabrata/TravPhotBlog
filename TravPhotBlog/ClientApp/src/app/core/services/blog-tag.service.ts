import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../core/configs/constants';

import { BlogTag } from '../models/blog-tag';

@Injectable({
  providedIn: 'root'
})
export class BlogTagService {
  //variable initialization
  blogTagApiURL: string = Constants.API_ROOT_URL + '/BlogInfo/Tags/';

  constructor(private httpClient: HttpClient) { }

  public getTags(blogTagId: number) {
    return this.httpClient.get<BlogTag[]>(this.blogTagApiURL + blogTagId);
  }
}
