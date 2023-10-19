import { Component } from '@angular/core';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { VendorService } from 'src/app/vendor/vendor.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  product!: Product;
  vendors: Vendor[] = [];
  message: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productSvc: ProductService,
    private vendorSvc:VendorService,
    private systemSvc: SystemService
  ){}
  ngOnInit():void {
    let id = this.route.snapshot.params['id'];
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
