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
import { DetailVendorComponent } from './vendor/detail-vendor/detail-vendor.component';
import { ListProductsComponent } from './product/list-products/list-products.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { ListRequestsComponent } from './request/list-requests/list-requests.component';
import { EditRequestComponent } from './request/edit-request/edit-request.component';
import { NewRequestComponent } from './request/new-request/new-request.component';
import { DetailRequestComponent } from './request/detail-request/detail-request.component';
import { RequestlineComponent } from './request/requestline/requestline.component';
import { NewRequestlineComponent } from './requestline/new-requestline/new-requestline.component';
import { EditRequestlineComponent } from './requestline/edit-requestline/edit-requestline.component';
import { ListReviewComponent } from './request/list-review/list-review.component';
import { ReviewRequestComponent } from './request/review-request/review-request.component';
import { UserSearchPipe } from './user/user-search.pipe';
import { VendorSearchPipe } from './vendor/vendor-search.pipe';
import { ProductSearchPipe } from './product/product-search.pipe';
import { RequestSearchPipe } from './request/request-search.pipe';
import { AccessdeniedComponent } from './core/accessdenied/accessdenied.component';


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
    DetailVendorComponent,
    ListProductsComponent,
    EditProductComponent,
    ProductDetailComponent,
    NewProductComponent,
    ListRequestsComponent,
    EditRequestComponent,
    NewRequestComponent,
    DetailRequestComponent,
    RequestlineComponent,
    NewRequestlineComponent,
    EditRequestlineComponent,
    ListReviewComponent,
    ReviewRequestComponent,
    UserSearchPipe,
    VendorSearchPipe,
    ProductSearchPipe,
    RequestSearchPipe,
    AccessdeniedComponent,
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
