import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/core/system.service';
import { Req } from '../request.class';
import { User } from 'src/app/user/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent {
  requests: Req[] = [];
  message: string = "";
  sortCol: string = "id";
  sortAsc: boolean = true;
  searchInput: string = "";
  loggedInUser?:User;

  constructor(
    private requestSvc:RequestService,
    private systemSvc:SystemService,
    private router: Router
  ){}
  ngOnInit():void {
    this.loggedInUser = this.systemSvc.loggedInUser;
    console.log(this.loggedInUser);
    if (this.loggedInUser === null ) {
      console.log(this.loggedInUser);
      this.router.navigate(['/login']);
    }
    this.sortCol = "id";
    this.sortAsc = true;
    this.requestSvc.list().subscribe({
      next: (res) => {
        this.requests = res;
        console.debug(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  sorted(input:string):void{
    if (this.sortCol === input) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortAsc = true;
    this.sortCol = input;
  }
}
