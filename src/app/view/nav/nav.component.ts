import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

   title: string = 'YaalBuy';
  currentUser: any;
  currentUserSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.currentUserSubscription = this.authenticationService.user.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser)
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }
  firebaseSignout() {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }
}
