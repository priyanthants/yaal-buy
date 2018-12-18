import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

   tableHeaders:string[]=['Id','Name','Price','Quantity','Actions'];
   products:Product[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
    console.log(this.products);
  }

}
