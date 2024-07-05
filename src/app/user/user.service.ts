import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';
import { SystemService } from '../core/system.service';
import { LoginDTO } from './loginDTO';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  get url() {return `${this.sys.config.baseurl}/api/users`; }
  constructor(
    private http: HttpClient,
    private sys: SystemService    
  ) { }
  list(): Observable<User[]>{
    return this.http.get(this.url, httpOptions) as Observable<User[]>;
  }
  getById(id:number): Observable<User>{
    return this.http.get(`${this.url}/${id}`, httpOptions) as Observable<User>;
  }
  createUser(user:User): Observable<User>{
    return this.http.post(this.url, user, httpOptions) as Observable<User>;
  }
  change(user:User): Observable<any>{
    return this.http.put(`${this.url}/${user.id}`, user, httpOptions) as Observable<any>;
  }
  remove(id:number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, httpOptions) as Observable<any>;
  }
  login(loginDTO:LoginDTO): Observable<User> {
    return this.http.post(`${this.url}/login`, loginDTO, httpOptions) as Observable<any>;
  }
}
