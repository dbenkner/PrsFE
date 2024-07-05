import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/core/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  user: User = new User();
  message:string = "";
  loggedInUser?: User;

  constructor (
    private userSvc: UserService,
    private sysSvc: SystemService,
    private router: Router
  ) {}
  ngOnInit(){
    if (this.sysSvc.loggedInUser === null || this.sysSvc.loggedInUser?.id === 0) {
      this.router.navigate(['/denied']);
    }
    console.log("test");
    console.log(this.sysSvc.loggedInUser);
    this.loggedInUser = this.sysSvc.loggedInUser;
    let isAdmin = false;
    for(let ur of this.sysSvc.loggedInUser?.userRoles!){
      if(ur.role?.rolename === "admin") {
        isAdmin = true;
        console.log(this.loggedInUser);
      }
    }
    console.log(this.loggedInUser);
    if (isAdmin === false) {
      this.router.navigate(['/denied']);
    }
  }

  saveUser(){
    this.userSvc.createUser(this.user).subscribe({
      next: (res) => {
        console.debug(res);
        this.router.navigate(['/users/listusers']);
      },
      error: (err) => {
        this.message = "sorry something went wrong please check entry and try again";
      }
    })
  }
}
