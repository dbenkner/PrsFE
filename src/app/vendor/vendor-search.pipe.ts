import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], search:string =""): Vendor[] {
    if (search === "") {
      return vendors;
    }
      let foundVendors: Vendor[] = [];
      for(let vendor of vendors) {
        if (vendor.code.toLowerCase().includes(search.toLowerCase()) ||
        vendor.name.toLowerCase().includes(search.toLowerCase()) || vendor.city.toLowerCase().includes(search.toLowerCase()) ||
        vendor.email.toLowerCase().includes(search.toLowerCase())) {
          foundVendors.push(vendor);
        }
    }
    return foundVendors;
  }

}
