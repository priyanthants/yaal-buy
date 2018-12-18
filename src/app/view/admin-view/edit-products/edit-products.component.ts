import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  //@Input() productId:number;
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  saveProduct():void{
    this.dataService.editProduct(1);
  }
}
