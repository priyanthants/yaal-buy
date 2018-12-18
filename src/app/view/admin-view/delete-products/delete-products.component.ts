import { Component, OnInit,  } from '@angular/core';
import {DataService} from '../../../service/data.service'

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {


  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

   deleteProduct():void{
    this.dataService.editProduct(1);
  }
}
