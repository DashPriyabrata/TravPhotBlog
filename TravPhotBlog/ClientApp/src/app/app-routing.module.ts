import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PlacesComponent } from './places/places.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'post/:navUrl/:blogId', component: PostComponent },
  { path: 'places/:type/:placeName', component: PlacesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent }
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
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
