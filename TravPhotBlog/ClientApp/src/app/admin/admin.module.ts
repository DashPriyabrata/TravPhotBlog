import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsDashboardComponent } from './components/contact-us-dashboard/contact-us-dashboard.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [AdminComponent, ContactUsDashboardComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
