import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../../../core/services/contact-us.service';
import { ContactUs } from '../../../core/models/contact-us';

@Component({
  selector: 'contact-us-dashboard',
  templateUrl: './contact-us-dashboard.component.html',
  styleUrls: ['./contact-us-dashboard.component.css']
})
export class ContactUsDashboardComponent implements OnInit {
  submissions: ContactUs[];
  status: boolean;

  constructor(private contactUsService: ContactUsService) { }

  ngOnInit(): void {
    this.contactUsService.getAllContactUsSubmission().subscribe((res) => {
      this.submissions = res;
    });
  }

  onReadClick(id: number) {
    this.contactUsService.updateAdminRead(id).subscribe(stat => {
      this.status = stat;
      if (stat) {
        this.submissions.find(item => item.Id == id).IsAdminRead = stat;
      }
    },
    response => {
      console.log("PATCH call in error", response);
    });
  }
}
