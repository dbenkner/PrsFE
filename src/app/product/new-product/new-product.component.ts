import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { SystemService } from 'src/app/core/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  product: Product = new Product();
  message: string = "";
  vendors: Vendor[] =[];
  loggedInUser?: User = new User();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productSvc: ProductService,
    private sysService: SystemService,
    private vendorSvc: VendorService
  ) {}

  ngOnInit(): void {
    this.message = "";
    this.loggedInUser = this.sysService.loggedInUser;
    let isAdmin = false;
    for(let ur of this.loggedInUser?.userRoles!){
      if(ur.role?.rolename === "admin") {
        isAdmin = true;
      }
    }
    if (isAdmin === false) this.router.navigate(['/denied']);
    this.vendorSvc.list().subscribe({
      next: (res) => {
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  save(): void {
    this.message = "";
    if (this.product.price < 0) {
      this.message = "PRICE MUST BE GREATER THAN 0";
      return;
    }
    this.productSvc.create(this.product).subscribe({
      next: (res) => {
        this.router.navigate(['/products/list']);
      },
      error: (err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
  }
}
