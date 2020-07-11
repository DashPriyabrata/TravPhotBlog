import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constants } from '../../core/configs/constants';
import { BlogPost } from '../models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  //variable initialization
  searchCountryApiURL: string = Constants.API_ROOT_URL + '/Search/Country';
  searchCityApiURL: string = Constants.API_ROOT_URL + '/Search/City';

  constructor(private httpClient: HttpClient) { }

  public getAllBlogsOfCountry(countryName: string) {
    return this.httpClient.get<BlogPost[]>(this.searchCountryApiURL + "/" + countryName);
  }
  public getAllBlogsOfCity(cityName: string) {
    return this.httpClient.get<BlogPost[]>(this.searchCityApiURL + "/" + cityName);
  }
}
