import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/core/system.service';

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
    private sysService:SystemService
  ){}

  ngOnInit():void{
    this.message = "";
    this.userService.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.users = res;
      },
      error: (err) => {
        console.error(err);
        this.message = "Sorry something went wrong";
      }
    });
  }
}
