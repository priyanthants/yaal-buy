import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  mycard:any[];
  constructor(private route: ActivatedRoute) {
    this.mycard = this.route.snapshot.data['userCard'];
    console.log(this.mycard);
   }

  ngOnInit() {
  }

}
