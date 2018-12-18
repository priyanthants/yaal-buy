import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { element } from '@angular/core/src/render3';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-list-products',
  templateUrl: './home-list-products.component.html',
  styleUrls: ['./home-list-products.component.css']
})
export class HomeListProductsComponent implements OnInit {

   products:Product[];

   rows:number[]=[1,2];

  
  constructor(private route: ActivatedRoute) { 
    this.products = this.route.snapshot.data['products'];
  }

  ngOnInit() {
    
  }

   getProducts=(row:number):Product[]=>{
    let subList:Product[];

    subList= this.products.filter((element,index)=>index<row*4);
    return subList;
  }
}
