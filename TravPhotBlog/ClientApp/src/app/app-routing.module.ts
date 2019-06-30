import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'post', component: PostComponent }
  //{
  //  path: '',
  //  redirectTo: '/home',
  //  pathMatch: 'full'
  //},
  //{
  //  path: 'home',
  //  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  //},
  //{
  //  path: 'about',
  //  loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  //},
  //{
  //  path: 'advertise',
  //  loadChildren: () => import('./advertise/advertise.module').then(m => m.AdvertiseModule)
  //},
  //{
  //  path: 'post',
  //  loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
