import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-vendors',
  templateUrl: './list-vendors.component.html',
  styleUrls: ['./list-vendors.component.css']
})
export class ListVendorsComponent {
  vendors!: Vendor[];
  message: string = "";
  sortedCol: string = "id";
  sortAsc: boolean = true;
  searchInput: string = "";
  loggedInUser?: User;

  sortCol(input:string) {
    if (input === this.sortedCol) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortedCol = input;
    this.sortAsc = true;
  }
  constructor(
    private vendorSvc: VendorService,
    private systemSvc: SystemService,
    private router: Router
  ) {}
  ngOnInit():void {
    this.message = "";
    this.loggedInUser = this.systemSvc.loggedInUser;
    this.vendorSvc.list().subscribe({
      next: (res) => {
        this.vendors = res;
      },
      error: (err) => {
        this.message = "Sorry something went wrong";
        if(err.status === 401) {
          console.log("test");
          this.router.navigate(['/denied']);
        }
      }
    });
  }
}
