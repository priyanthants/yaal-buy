import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.css']
})
export class PaymentSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  confirmPayment(response: object): void {
    console.log(response);
  }
 
  cancelledPayment(): void {
      console.log('close');
  }
 
  generateReference(): string {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 10; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
 
      return text;
  }
}
