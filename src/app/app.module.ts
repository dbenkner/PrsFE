import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { SortPipe } from './core/sort.pipe';
import { LoginComponent } from './user/login/login.component';
import { ListVendorsComponent } from './vendor/list-vendors/list-vendors.component';
import { CreateVendorComponent } from './vendor/create-vendor/create-vendor.component';
import { EditVendorComponent } from './vendor/edit-vendor/edit-vendor.component';
import { DetailVendorComponent } from './vendor/detail-vendor/detail-vendor.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    ListUsersComponent,
    NewUserComponent,
    UserDetailsComponent,
    EditUserComponent,
    SortPipe,
    LoginComponent,
    ListVendorsComponent,
    CreateVendorComponent,
    EditVendorComponent,
    DetailVendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
