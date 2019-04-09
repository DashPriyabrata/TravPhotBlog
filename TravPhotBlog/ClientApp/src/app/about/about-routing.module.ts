import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'me',
    component: AboutMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
