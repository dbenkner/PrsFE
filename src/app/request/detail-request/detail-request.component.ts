import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Req } from '../request.class';

@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.component.html',
  styleUrls: ['./detail-request.component.css']
})
export class DetailRequestComponent {
  request!: Req;
  message: string = "";
  verDel = false;

  constructor(
    private requestSvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private systemSvc: SystemService
  ){}
  ngOnInit():void {
    this.message = "";
    let id = this.route.snapshot.params['id'];
    this.requestSvc.getById(id).subscribe({
      next: (res) => {
        this.request = res;
      },
      error: (err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
    
  }
  delBtn():void {
    this.verDel = true;
  }
  remove(): void {
    this.requestSvc.deleteRequest(this.request.id).subscribe({
      next:(res)=> {
        this.router.navigate(['/requests/list']);
      },
      error:(err) => {
        this.message = "Sorry something went wrong";
        console.error(err);
      }
    });
  }
}
