import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-purchase',
  templateUrl: './user-purchase.component.html',
  styleUrls: ['./user-purchase.component.css']
})
export class UserPurchaseComponent implements OnInit {
  mypurchase:any[];
  constructor(private route: ActivatedRoute) {
    this.mypurchase = this.route.snapshot.data['userPurchase'];

   }

  ngOnInit() {
  }

}
