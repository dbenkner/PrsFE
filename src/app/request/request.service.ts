import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Req } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url:string = "http://localhost:5555/api/requests"
  constructor(
    private http:HttpClient
  ) { }

  list():Observable<Req[]>{
    return this.http.get(this.url) as Observable<Req[]>;
  }
  getById(id:number):Observable<Req>{
    return this.http.get(`${this.url}/${id}`) as Observable<Req>;
  }
  create(request:Req):Observable<Req>{
    return this.http.post(this.url, request) as Observable<Req>;
  }
  updateRequest(request:Req):Observable<any>{
    return this.http.put(`${this.url}/${request.id}`, request) as Observable<any>;
  }
  deleteRequest(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  review(request:Req):Observable<any>{
    return this.http.put(`${this.url}/review/${request.id}`, request) as Observable<any>;
  }
  reject(request:Req):Observable<any>{
    return this.http.put(`${this.url}/reject/${request.id}`, request) as Observable<any>;
  }
  approve(request:Req):Observable<any>{
    return this.http.put(`${this.url}/approve/${request.id}`, request) as Observable<any>; 
  }
  checkReviews(userId:number):Observable<Req[]>{
    return this.http.get(`${this.url}/reviews/${userId}`) as Observable<Req[]>;
  }
}
