import { Component } from '@angular/core';
import { Req } from '../request.class';
import { User } from 'src/app/user/user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent {
  request!: Req;
  user!: User;
  message:string = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private systemSvc: SystemService,
    private requestSvc: RequestService
  ) {}

  ngOnInit(): void {
    this.message = "";
    this.user = this.systemSvc.loggedInUser;
    if (!this.user) this.router.navigate(['/login']);
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.requestSvc.getById(id).subscribe({
      next: (res) => {
        this.request = res;
        console.debug(this.request);
      },
      error: (err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
  }
  save(): void{
    this.requestSvc.updateRequest(this.request).subscribe({
      next:(res) => {
        this.router.navigate(['/requests/list']);
      },
      error:(err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
  }
}
