import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { VendorService } from '../vendor.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-detail-vendor',
  templateUrl: './detail-vendor.component.html',
  styleUrls: ['./detail-vendor.component.css']
})
export class DetailVendorComponent {
  vendor!: Vendor;
  message:string = "";
  verBtn: boolean = false;
  loggedInUser?: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sysService: SystemService,
    private vendorService: VendorService
  ){}
  ngOnInit():void{
    this.verBtn = false;
    this.loggedInUser = this.sysService.loggedInUser;
    let id = this.route.snapshot.params['id'];
    this.vendorService.getById(id).subscribe({
      next: (res) => {
        this.vendor = res;
      },
      error: (err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
        if(err.status === 401) {
          console.log("test");
          this.router.navigate(['/denied']);
        }
      }
    });
  }

  verifyBtn():void {
    this.verBtn = true;
  }
  deleteVendor():void{
    this.vendorService.remove(this.vendor.id).subscribe({
      next:(res) => {
        this.router.navigate(['/vendors/list']);
      },
      error: (err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
  }
}
