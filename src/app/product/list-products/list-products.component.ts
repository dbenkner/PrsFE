import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { User } from 'src/app/user/user.class';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products!: Product[];
  message: string = "";
  sortCol: string = "id";
  sortAsc: boolean = true;
  searchInput: string = "";
  loggedInUser?: User = new User();

  constructor(
    private productSvc: ProductService,
    private sysService: SystemService
  ) {}
  ngOnInit():void {
    this.sortCol = "id";
    this.sortAsc = true;
    this.loggedInUser = this.sysService.loggedInUser;
    this.productSvc.list().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  sorted(input:string):void{
    if (input === this.sortCol) {
      this.sortAsc = !this.sortAsc;
      return
    }
    this.sortAsc = true;
    this.sortCol = input;
  }
}
