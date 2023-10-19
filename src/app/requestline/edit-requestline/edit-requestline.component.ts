import { Component } from '@angular/core';
import { Requestline } from '../requestline.class';
import { Product } from 'src/app/product/product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from '../requestline.service';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-edit-requestline',
  templateUrl: './edit-requestline.component.html',
  styleUrls: ['./edit-requestline.component.css']
})
export class EditRequestlineComponent {
  rl!: Requestline;
  products: Product[] = [];
  message:string ="";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rlSvc: RequestlineService,
    private productSvc: ProductService
  ){}

  ngOnInit() {
    this.message="";
    let rlId = this.route.snapshot.params['id'];
    this.rlSvc.getById(rlId).subscribe({
      next:(res) => {
        this.rl = res;
      },
      error:(err) => {
        console.error(err);
      }
    }); 
    this.productSvc.list().subscribe({
      next:(res) => {
        this.products = res;
      },
      error:(err)=>{
        console.error(err);
      }
    });
  }
  save(){
    this.message="";
    this.rlSvc.edit(this.rl).subscribe({
      next:(res) => {
        this.router.navigate([`/requests/requestline/${this.rl.requestId}`]);
      },
      error:(err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
  }
}
