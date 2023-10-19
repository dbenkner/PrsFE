import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Requestline } from './requestline.class';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {
  url:string = "http://localhost:5555/api/requestlines"
  constructor(
    private http: HttpClient
  ) { }

  create(requestline:Requestline): Observable<Requestline>{
    return this.http.post(`${this.url}`, requestline) as Observable<Requestline>;
  }
  edit(requestline:Requestline): Observable<Requestline>{
    return this.http.put(`${this.url}/${requestline.id}`, requestline) as Observable<any>;
  }
  remove(id:number): Observable<Requestline>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  getById(id:number): Observable<Requestline>{
    return this.http.get(`${this.url}/${id}`) as Observable<Requestline>;
  }
}
