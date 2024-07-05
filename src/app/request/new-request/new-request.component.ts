import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';
import { RequestService } from '../request.service';
import { Req } from '../request.class';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent {
  request: Req = new Req();
  user?: User;
  message: string = "";
  constructor(
    private router: Router,
    private systemSvc:SystemService,
    private requestSvc:RequestService
  ) {}
  ngOnInit(){
    this.user = this.systemSvc.loggedInUser;
    if (!this.user) {
      this.router.navigate(['/login']);
    } else {
      this.request.userId = +this.user.id
      console.log(this.request.userId);
    }
  }
  save(){
    this.requestSvc.create(this.request).subscribe({
      next: (res) => {
        this.router.navigate(['/requests/list']);
      },
      error: (err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
  }
}
