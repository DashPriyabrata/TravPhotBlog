import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../core/configs/constants';
import { ContactUs } from '../models/contact-us';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  //variable initialization
  private contactUsApiURL: string = Constants.API_ROOT_URL + '/ContactUs';

  constructor(private httpClient: HttpClient) { }

  public postContactUsSubmission(submission: ContactUs) {
    debugger;
    return this.httpClient.post<boolean>(this.contactUsApiURL + "/Add", submission);
  }
}
