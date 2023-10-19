import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { SystemService } from 'src/app/core/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  product: Product = new Product();
  message: string = "";
  vendors: Vendor[] =[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productSvc: ProductService,
    private sysService: SystemService,
    private vendorSvc: VendorService
  ) {}

  ngOnInit(): void {
    this.message = "";
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
