import { Component } from '@angular/core';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-accessdenied',
  templateUrl: './accessdenied.component.html',
  styleUrls: ['./accessdenied.component.css']
})
export class AccessdeniedComponent {
  constructor (
    private sysService: SystemService
  ) {}
}
