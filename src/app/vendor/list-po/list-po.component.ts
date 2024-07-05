import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Po } from '../po.class';
import { User } from 'src/app/user/user.class';
import { SystemService } from 'src/app/core/system.service';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-list-po',
  templateUrl: './list-po.component.html',
  styleUrls: ['./list-po.component.css']
})
export class ListPoComponent {
  po!: Po;
  loggedInUser?:User;
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private sysService: SystemService,
    private vendorSvc: VendorService
  ){}
  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    this.loggedInUser = this.sysService.loggedInUser;
    this.vendorSvc.getPo(id).subscribe({
      next:(res) => {
        console.log(res);
        this.po = res;
      },
      error:(err) => {
        console.error(err);
        if(err.status === 401) {
          console.log("test");
          this.router.navigate(['/denied']);
        }
      }
    });
  }
}
