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
    return this.httpClient.post<boolean>(this.contactUsApiURL + "/Add", submission);
  }

  public getAllContactUsSubmission() {
    return this.httpClient.get<ContactUs[]>(this.contactUsApiURL + "/All");
  }

  public updateAdminRead(subId: number) {
    return this.httpClient.patch<boolean>(this.contactUsApiURL + "/Update/AdminRead", subId);
  }
}
