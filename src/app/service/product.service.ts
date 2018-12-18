import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {Observable,of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
  constructor() { }

  public getProducts():Observable<Product[]>{
   
    return of(this.products);
  }

  public getProduct(id:number):Observable<Product>{
    return of(this.products[id-1]);
  }
}
