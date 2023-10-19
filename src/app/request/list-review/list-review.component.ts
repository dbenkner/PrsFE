import { Component } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Req } from '../request.class';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent {
  user!: User;
  requests: Req[] =[];
  message: string = "";
  sortCol:string = "id";
  sortAsc:boolean = true;

  constructor(
    private requestSvc: RequestService,
    private router: Router,
    private systemSvc: SystemService
  ){}

  ngOnInit():void{
    this.user = this.systemSvc.loggedInUser;
    if(!this.user) this.router.navigate([`/login`]);
    this.requestSvc.checkReviews(this.user.id).subscribe({
      next:(res)=> {
        this.requests = res;
        console.log(this.requests);
      },
      error:(err) => {
        console.error(err);
      }
    });
  }
  sorted(input:string):void {
    if (input === this.sortCol){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortCol = input;
    this.sortAsc = true;
  }
}
