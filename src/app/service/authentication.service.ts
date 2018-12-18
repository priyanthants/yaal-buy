import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;


  constructor(
    private _firebaseAuth: AngularFireAuth,
    private router: Router) {
    this.user = _firebaseAuth.authState;
    console.log(this.user);

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );


  }


  signin(username: string, password: string) {
    console.log("you have been successfully signin " + username);
  }

  signup(user: User) {
    console.log("you have been successfully signup " + user);
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }

  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  isLoggedIn() {
    if (JSON.parse(localStorage.getItem('currentUser')) == null) {

      console.log("not login")
      return false;
    } else {
      console.log("not login")
      return true;
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

}
