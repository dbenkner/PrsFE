import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/core/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  message: string = "";
  constructor (
    private userSvc : UserService,
    private router: Router,
    private sysService: SystemService
  ) {  }

  logOn() {
    this.userSvc.login(this.username, this.password).subscribe({
      next: (res) => {
        this.sysService.loggedInUser = res;
        this.router.navigate(['requests/list']);
      }, error: (err) => {
        if (err.status = 404) {
          this.message = "Invalid Username or Password"
        } else {
          this.message = "Something went wrong"
        }
      }
    });
  }
}
