import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.class';
import { Observable } from 'rxjs';
import { SystemService } from '../core/system.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  get url() {return `${this.sys.config.baseurl}/api/products`; }
  constructor(
    private http: HttpClient,
    private sys: SystemService
  ) { }

  list(): Observable<Product[]> {
    return this.http.get(this.url) as Observable<Product[]>
  }
  getById(id:number): Observable<Product> {
    return this.http.get(`${this.url}/${id}`) as Observable<Product>;
  }

  create(product:Product): Observable<Product>{
    return this.http.post(this.url, product) as Observable<Product>;
  }
  updateProduct(product:Product): Observable<any>{
    return this.http.put(`${this.url}/${product.id}`, product) as Observable<any>;
  }
  removeProduct(id:number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
