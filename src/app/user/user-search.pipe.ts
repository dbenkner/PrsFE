import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], substr:string=""): User[] {
    if (substr === "") {
      return users;
    }
    let searchedUsers: User[] = [];
    for(let user of users) {
      if (user.firstname.toLowerCase().includes(substr.toLowerCase()) ||
      user.lastname.toLowerCase().includes(substr.toLowerCase()) ||
      user.username.toLowerCase().includes(substr.toLowerCase()) ||
      user.email.toLowerCase().includes(substr.toLowerCase())){
        searchedUsers.push(user);
      }
    }
    return searchedUsers;
  }
}
