import { Pipe, PipeTransform } from '@angular/core';
import { Req } from './request.class';
import { Role } from '../user/role.class';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: Req[], searchInput:string=""): Req[] {
    if (searchInput === "") {
      return requests;
    }
    let foundRequests: Req[] = [];
    for(let request of requests) {
      if (request.description.toLowerCase().includes(searchInput.toLowerCase()) || request.user.username.includes(searchInput.toLowerCase()) ||
      request.status.toLowerCase().includes(searchInput.toLowerCase())) {
        foundRequests.push(request);
      }
    }
    return foundRequests;
  }

}
