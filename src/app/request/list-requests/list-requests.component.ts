import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/core/system.service';
import { Req } from '../request.class';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent {
  requests: Req[] = [];
  message: string = "";
  sortCol: string = "id";
  sortAsc: boolean = true;

  constructor(
    private requestSvc:RequestService,
    private systemSvc:SystemService
  ){}
  ngOnInit():void {
    this.sortCol = "id";
    this.sortAsc = true;
    this.requestSvc.list().subscribe({
      next: (res) => {
        this.requests = res;
        console.debug(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  sorted(input:string):void{
    if (this.sortCol === input) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortAsc = true;
    this.sortCol = input;
  }
}
