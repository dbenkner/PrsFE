import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { LoginComponent } from './user/login/login.component';
import { ListVendorsComponent } from './vendor/list-vendors/list-vendors.component';
import { CreateVendorComponent } from './vendor/create-vendor/create-vendor.component';
import { DetailVendorComponent } from './vendor/detail-vendor/detail-vendor.component';
import { EditVendorComponent } from './vendor/edit-vendor/edit-vendor.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'about', component: AboutComponent}, // insert new components after this...
  {path: 'users/listusers', component:ListUsersComponent},
  {path: 'users/new', component:NewUserComponent},
  {path: 'users/:id', component:UserDetailsComponent},
  {path: 'users/edit/:id', component:EditUserComponent},
  {path: 'vendors/list', component:ListVendorsComponent},
  {path: 'vendors/new', component:CreateVendorComponent},
  {path: 'vendors/:id', component:DetailVendorComponent},
  {path: 'vendors/edit/:id', component:EditVendorComponent},
  {path: '**', component: E404Component} // ALWAYS LAST ROUTE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
