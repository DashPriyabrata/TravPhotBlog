import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertiseRoutingModule } from './advertise-routing.module';
import { AdvertiseComponent } from '../advertise/advertise.component';

@NgModule({
  declarations: [AdvertiseComponent],
  imports: [
    CommonModule,
    AdvertiseRoutingModule
  ]
})
export class AdvertiseModule { }
