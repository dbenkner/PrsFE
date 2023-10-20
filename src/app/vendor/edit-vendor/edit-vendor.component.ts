import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { VendorService } from '../vendor.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css']
})
export class EditVendorComponent {
  vendor!: Vendor;
  message: string = "";
  loggedInUser!: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private systemSvc: SystemService,
    private vendorSvc: VendorService
  ) {}

  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    console.log("test");
    this.message ="";
    this.loggedInUser = this.systemSvc.loggedInUser;
    if (this.loggedInUser.isAdmin === false) this.router.navigate(['/denied']);
    this.vendorSvc.getById(id).subscribe({
      next:(res) => {
        this.vendor = res;
      },
      error:(err) => {
        this.message = "Sorry something went wrong";
      }
    });
  }

  saveVendor(){
    this.message="";
    this.vendorSvc.edit(this.vendor).subscribe({
      next:(res) => {
        this.router.navigate(['/vendors/list']);
      },
      error:(err) => {
        this.message = "Sorry something went wrong";
      }
    })
  }
}
