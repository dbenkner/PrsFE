import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent {
  vendor: Vendor = new Vendor();
  message:string = "";

  constructor(
    private router: Router,
    private sysSvc: SystemService,
    private vendorSvc: VendorService
  ) {}

  ngOnInit(){}

  saveVendor(){
    this.message = "";
    this.vendorSvc.create(this.vendor).subscribe({
      next: (res) => {
        this.router.navigate(['/vendors/list']);
      },
      error: (err) => {
        this.message = "Sorry something went wrong";
      }
    });
  }
}
