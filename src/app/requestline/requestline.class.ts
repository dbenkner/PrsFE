import { Product } from "../product/product.class";
import { Req } from "../request/request.class";

export class Requestline {
    id: number = 0;
    requestId: number = 0;
    request!: Req;
    productId: number = 0;
    product!: Product;
    quantity: number = 0;
}