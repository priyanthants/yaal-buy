import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs";
import { ProductService } from './product.service';
import { __await } from 'tslib';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  products:Product[]=[{
    id:1,
   ref:'TPJ00001',
   name:'Retro Telephone',
   quantity:13,
   price:38,
   img:[
       'assets/images/item1/img1.jpg',
       'assets/images/item1/img2.jpg',
       'assets/images/item1/img3.jpg',
       'assets/images/item1/img4.jpg'
   ]
 },
 {
   id:2,
   ref:'TPJ00002',
   name:'Wireless  Headset',
   quantity:24,
   price:12,
   img:[
     'assets/images/item2/img1.jpg',
     'assets/images/item2/img2.jpg',
     'assets/images/item2/img3.jpg',
     'assets/images/item2/img4.jpg'
 ]
 },
 {
   id:3,
   ref:'TPJ00003',
   name:'Mobile Phone',
   quantity:30,
   price:42,
   img:[
     'assets/images/item3/img1.jpg',
     'assets/images/item3/img2.jpg',
     'assets/images/item3/img3.jpg',
     'assets/images/item3/img4.jpg'
 ]
 }, {
   id:4,
   ref:'TPJ00004',
   name:'WD Hard Disk',
   quantity:20,
   price:70,
   img:[
     'assets/images/item4/img1.jpg',
     'assets/images/item4/img2.jpg',
     'assets/images/item4/img3.jpg',
     'assets/images/item4/img4.jpg'
 ]
 }
];
  constructor(private productService:ProductService) { }

  getUserProfileDetails():Observable<any>{
    return of(JSON.parse(localStorage.getItem('currentUser')));
  }

   getUserCardDetails():Observable<any[]>{
    const cardDetails=[
      {
      product: this.products[0],
      quantity:2,
      total:2*this.products[0].price
    }, {
      product:this.products[1],
      quantity:1,
      total:1*this.products[1].price
    }
  ]
    return of(cardDetails);
  }

  getUserPurchaseDetails():Observable<any[]>{
    let purchaseDetails=[{
      product:this.products[2],
      quantity:1,
      total:1*this.products[2].price
    },
    {
      product:this.products[3],
      quantity:2,
      total:2*this.products[3].price
    }
  ]
    return of(purchaseDetails);
  }
}
