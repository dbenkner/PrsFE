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
import { ListProductsComponent } from './product/list-products/list-products.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ListRequestsComponent } from './request/list-requests/list-requests.component';
import { DetailRequestComponent } from './request/detail-request/detail-request.component';
import { NewRequestComponent } from './request/new-request/new-request.component';
import { EditRequestComponent } from './request/edit-request/edit-request.component';
import { RequestlineComponent } from './request/requestline/requestline.component';
import { NewRequestlineComponent } from './requestline/new-requestline/new-requestline.component';
import { EditRequestlineComponent } from './requestline/edit-requestline/edit-requestline.component';
import { ListReviewComponent } from './request/list-review/list-review.component';
import { ReviewRequestComponent } from './request/review-request/review-request.component';

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
  {path: 'products/list', component:ListProductsComponent},
  {path: 'products/new', component:NewProductComponent},
  {path: 'products/:id', component:ProductDetailComponent},
  {path: 'products/edit/:id', component:EditProductComponent},
  {path: 'requests/list', component:ListRequestsComponent},
  {path: 'requests/new', component:NewRequestComponent},
  {path: 'requests/:id', component:DetailRequestComponent},
  {path: 'requests/edit/:id', component:EditRequestComponent},
  {path: 'requests/requestline/:id', component:RequestlineComponent},
  {path: 'requestline/new/:rid', component:NewRequestlineComponent},
  {path: 'requestline/edit/:id', component:EditRequestlineComponent},
  {path: 'review/list', component:ListReviewComponent},
  {path: 'review/:id', component:ReviewRequestComponent},
  {path: '**', component: E404Component} // ALWAYS LAST ROUTE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
