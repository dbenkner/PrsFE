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
  loggedInUser!: User;

  constructor (
    private userSvc: UserService,
    private sysSvc: SystemService,
    private router: Router
  ) {}
  ngOnInit(){
    this.loggedInUser = this.sysSvc.loggedInUser;
    if (this.loggedInUser.isAdmin === false) {
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
