import { Component } from '@angular/core';
import { Req } from '../request.class';
import { User } from 'src/app/user/user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-review-request',
  templateUrl: './review-request.component.html',
  styleUrls: ['./review-request.component.css']
})
export class ReviewRequestComponent {
  request!: Req;
  message: string = "";
  user!: User;
  isRejected:boolean = false;
  rejectionReason?:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private systemSvc: SystemService,
    private requestSvc: RequestService,
    private rlSvc: RequestlineService
  ) {}

  ngOnInit():void {
    this. isRejected = false;
    let id = this.route.snapshot.params['id'];
    this.user = this.systemSvc.loggedInUser;
    this.requestSvc.getById(id).subscribe({
      next:(res) => {
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  approve():void {
    this.requestSvc.approve(this.request).subscribe({
      next: (res) => {
        this.router.navigate(['/review/list']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  reject(): void {
    this.isRejected = true;
  }
  confirmReject(): void {
    this.requestSvc.reject(this.request).subscribe({
      next:(res) => {
        this.router.navigate(['review/list']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
