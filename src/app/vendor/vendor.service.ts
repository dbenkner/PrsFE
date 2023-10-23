import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';
import { HttpClient } from '@angular/common/http';
import { Po } from './po.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  url: string = "http://localhost:5555/api/vendors"
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Vendor[]> {
    return this.http.get(this.url) as Observable<Vendor[]>;
  }
  getById(id:number):Observable<Vendor>{
    return this.http.get(`${this.url}/${id}`) as Observable<Vendor>;
  }
  getPo(id:number):Observable<Po>{
    return this.http.get(`${this.url}/po/${id}`) as Observable<Po>
  }
  create(vendor:Vendor):Observable<Vendor>{
    return this.http.post(this.url, vendor) as Observable<Vendor>;
  }
  edit(vendor:Vendor):Observable<any>{
    return this.http.put(`${this.url}/${vendor.id}`, vendor) as Observable<any>;
  }
  remove(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
