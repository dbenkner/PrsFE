import { Component } from '@angular/core';
import { Req } from '../request.class';
import { SystemService } from 'src/app/core/system.service';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from 'src/app/requestline/requestline.service';

@Component({
  selector: 'app-requestline',
  templateUrl: './requestline.component.html',
  styleUrls: ['./requestline.component.css']
})
export class RequestlineComponent {
  request!: Req;
  message: string ="";
  verBtn:boolean = false;


  constructor(
    private sysSvc: SystemService,
    private reqSvc: RequestService,
    private rlSvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(){
    this.refresh();
  }
  refresh() {
    this.message = "";
    this.verBtn = false;
    let id:number = this.route.snapshot.params['id'];
    this.reqSvc.getById(id).subscribe({
      next:(res) => {
        this.request = res;
        console.debug(this.request);
      },
      error:(err) => {
        this.message = "Sorry something went wrong";
        console.error(err); 
      }
    });
  }
  submit() {
    this.reqSvc.review(this.request).subscribe({
      next: (res) => {
        this.router.navigate([`requests/list`]);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  verDel():void {
    this.verBtn = true;
  }
  remove(id:number):void{
    this.rlSvc.remove(id).subscribe({
      next: (res) => {
        this.refresh();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
