import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../core/configs/constants';
import { InstaModel } from '../../shared/models/instapost';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  //variable initialization
  instaApiURL: string = Constants.API_ROOT_URL + '/Social/Instagram/RecentMedia';

  constructor(private httpClient: HttpClient) { }

  public getInstagramRecentMedia() {
    return this.httpClient.get<InstaModel>(this.instaApiURL);
  }
}
