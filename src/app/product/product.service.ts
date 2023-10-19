import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://localhost:5555/api/products"
  constructor(
    private http: HttpClient
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
    return this.http.delete(`${this.url}/id`) as Observable<any>;
  }
}
