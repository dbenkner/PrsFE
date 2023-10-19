import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: Product;
  message: string = "";
  verBtn: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sysService: SystemService,
    private productSvc: ProductService
  ){}

  ngOnInit(): void {
    this.verBtn = false;
    let id = this.route.snapshot.params['id'];
    this.productSvc.getById(id).subscribe({
      next: (res) => {
        this.product = res;
      },
      error: (err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
  }
  verDelete(): void {
    this.verBtn = true;
  }
  remove(): void {
    this.productSvc.removeProduct(this.product.id).subscribe({
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
