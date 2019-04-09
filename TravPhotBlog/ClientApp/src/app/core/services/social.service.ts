import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../configs/constants';
import { InstaPost } from '../../shared/models/instapost';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  //variable initialization
  instaApiURL: string = Constants.API_ROOT_URL + '/Social/Instagram/RecentMedia';
  instaPosts: InstaPost[];

  constructor(private httpClient: HttpClient) { }

  public getInstagramRecentMedia() {
    return this.httpClient.get(this.instaApiURL).pipe(map(res => {
      var data = res.Data;
      return data.map(d => {
        return new InstaPost(d.Id, d.Images.Standard_Resolution, d.Likes.Count, d.Link, d.Location);
      });
    }));
  }
}
