import { Component } from '@angular/core';
import { Requestline } from '../requestline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from '../requestline.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-new-requestline',
  templateUrl: './new-requestline.component.html',
  styleUrls: ['./new-requestline.component.css']
})
export class NewRequestlineComponent {
  rl: Requestline = new Requestline();
  products: Product[] = [];
  message: string = "";
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private rlSvc: RequestlineService,
    private productSvc: ProductService
  ) {}
  ngOnInit(){
    this.rl.requestId = +this.route.snapshot.params['rid'];
    this.productSvc.list().subscribe({
      next:(res) => {
        this.products = res;
      }
    });
  }
  save() {
    this.rl.productId = +this.rl.productId;
    this.rlSvc.create(this.rl).subscribe({
      next: (res) => {
        this.router.navigate([`requests/requestline/${this.rl.requestId}`]);
      },
      error: (err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
  }
}
