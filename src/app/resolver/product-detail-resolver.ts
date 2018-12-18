import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ProductService} from '../service/product.service';
import {Product} from '../model/product'

@Injectable()
export class ProductDetailResolver implements Resolve<any> {
    constructor(
        private productService: ProductService,
    ){}

    resolve(route: ActivatedRouteSnapshot) : Observable<Product>{
        console.log("resolver");
        return this.productService.getProduct(route.params['id']);
    }
}
