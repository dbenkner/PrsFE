import { Component } from '@angular/core';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from '../product.service';
import { VendorService } from 'src/app/vendor/vendor.service';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  product!: Product;
  vendors: Vendor[] = [];
  message: string = "";
  loggedInUser?:User = new User();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productSvc: ProductService,
    private vendorSvc:VendorService,
    private systemSvc: SystemService
  ){}
  ngOnInit():void {
    let id = this.route.snapshot.params['id'];
    this.loggedInUser = this.systemSvc.loggedInUser;
    let isAdmin:boolean = false;
    for(let ur of this.loggedInUser?.userRoles!){
      if(ur.role?.rolename === "admin") {
        isAdmin = true;
      }
    }
    if(isAdmin === false){
      this.router.navigate(['/denied']);
    }
    this.vendorSvc.list().subscribe({
      next:(res) => {
        this.vendors = res;
      },
      error:(err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
    this.productSvc.getById(id).subscribe({
      next:(res) => {
        this.product = res;
      },
      error:(err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
  }
  save():void {
    this.message = "";
    if(this.product.price <= 0) {
      this.message = "Price must be greater than 0!";
      return;
    }
    this.productSvc.updateProduct(this.product).subscribe({
      next:(res) => {
        this.router.navigate(['products/list']);
      },
      error:(err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
  }
}
