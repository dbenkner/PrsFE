import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user!: User;
  message: string ="";
  verBtn = false;
  loggedInUser!: User;
  constructor(
    private userSvc: UserService,
    private sysService:SystemService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.loggedInUser = this.sysService.loggedInUser;
    this.userSvc.getById(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
        this.message= "Sorry something went wrong";
      }
    });
  }
  verifyBtn():void{
    if (this.verBtn === false) {
      this.verBtn = true;
    }
  }
  deleteUser():void {
    this.userSvc.remove(this.user.id).subscribe({
      next: (res) => {
        this.router.navigate(['/users/listusers']);
      },
      error: (err) => {
        console.error(err);
        this.message = "Sorry something went wrong";
      }
    });
  }
}
