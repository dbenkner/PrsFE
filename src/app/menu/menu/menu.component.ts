import { Component } from '@angular/core';
import { Menu } from '../menu.class';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus:Menu[] = [
    new Menu ('HOME', '/home'),
    new Menu ('ABOUT', '/about'),
    new Menu('USERS', '/users/listusers'),
    new Menu('VENDORS', '/vendors/list')
  ];
  user!: User;
  constructor(
    private sysService: SystemService
  ) {}
  ngOnInit():void {  
    this.user = this.sysService.loggedInUser;
  }
  refresh():void {

  }
}
