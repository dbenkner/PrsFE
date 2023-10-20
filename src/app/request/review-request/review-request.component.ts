import { Component } from '@angular/core';
import { Req } from '../request.class';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-review-request',
  templateUrl: './review-request.component.html',
  styleUrls: ['./review-request.component.css']
})
export class ReviewRequestComponent {
  request!: Req;
  message: string = "";
  user!: User;
}
