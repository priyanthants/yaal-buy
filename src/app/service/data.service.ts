import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public deleteProduct(productid:number):void{
    console.log(`product ${productid} has been sucessfully deleted`)
  }

  public editProduct(productid:number):void{
    console.log(`product ${productid} has been sucessfully edited`)
  }
}
