import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/core/system.service';
import { Router } from '@angular/router';
import { UserToRole } from '../usertorole.class';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  users: User[] = [];
  message: string = "";
  sortedCol:string = "id";
  sortAsc:boolean = true;
  substr:string = "";
  loggedInUser?:User = new User();

  sortCol(input:string) {
    if (this.sortedCol === input) {
      this.sortAsc = !this.sortAsc;
      return
    } 
    this.sortAsc = true;
    this.sortedCol = input;
  }
  constructor(
    private userService:UserService,
    private sysService:SystemService,
    private router:Router
  ){}

  ngOnInit():void{
    this.message = "";
    
    this.loggedInUser = this.sysService.loggedInUser;
    
    
    this.userService.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.users = res;
        
      },
      error: (err) => {
        console.error(err);
        this.message = "Sorry something went wrong";
        if(err.status === 401) {
          console.log("test");
          this.router.navigate(['/denied']);
        }
      }
    });
  }
}
