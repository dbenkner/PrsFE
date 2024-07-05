import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/core/system.service';
import { Router } from '@angular/router';
import { LoginDTO } from '../loginDTO';
import { InjectionToken } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  message: string = "";
  loginDTO: LoginDTO = new LoginDTO();
  constructor (
    private userSvc : UserService,
    private router: Router,
    private sysService: SystemService
  ) {  }

  logOn() {
    this.userSvc.login(this.loginDTO).subscribe({
      next: (res) => {
        this.sysService.loggedInUser = res;
        console.log(res);
        this.router.navigate(['requests/list']);
      }, error: (err) => {
        if (err.status === 404) {
          this.message = "Invalid Username or Password"
        } else {
          this.message = "Something went wrong"
        }
      }
    });
  }
}
