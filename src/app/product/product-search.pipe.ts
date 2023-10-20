import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], searchInput:string = ""): Product[] {
    if (searchInput === "") {
      return products;
    }
    let foundProducts: Product[] = [];
    for (let product of products) {
      if (product.name.toLowerCase().includes(searchInput.toLowerCase()) || product.partNbr.toLowerCase().includes(searchInput.toLowerCase()) ||
      product.vendor.name.toLocaleLowerCase().includes(searchInput.toLowerCase())) {
        foundProducts.push(product);
      }
    }
    return foundProducts;
  }
}
