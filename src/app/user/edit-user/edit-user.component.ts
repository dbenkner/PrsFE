import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/core/system.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  user!: User;
  message: string = "";
  constructor(
    private userSvc: UserService,
    private sysSvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.message ="";
    let id:number = this.route.snapshot.params['id'];
    this.userSvc.getById(id).subscribe({
      next:(res) => {
        console.debug(res);
        this.user = res;
      },
      error:(err) => {
        console.error(err);
        this.message = "Sorry something went wrong";
      }
    });
  }
  saveUser(): void {
    this.userSvc.change(this.user).subscribe({
      next: (res) => {
        this.router.navigate(['/users/listusers']);
      },
      error: (err) => {
        console.error("err");
        this.message = ("Sorry something went wrong");
      }
    });
  }
}
