import { Injectable } from '@angular/core';
import { User } from '../user/user.class';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  get config() {return this.init.config}
  loggedInUser? = new User();
  constructor(
    private init: AppInitService
  ) { }

  setLoggedInUser(user:User) {
    this.loggedInUser = user;
  }
}
