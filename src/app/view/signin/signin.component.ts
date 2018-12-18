import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';
import { __await } from 'tslib';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
 
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService:AuthenticationService
) {
    // redirect to home if already logged in
    if (this.authenticationService.isLoggedIn()) { 
        this.router.navigate(['/']);
    }
}

ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    //this.loading = true;
    this.authenticationService.signin(this.f.username.value, this.f.password.value);
    console.log(this.returnUrl);
    this.router.navigate(['/home']);
}

  signInWithGoogle(){
    console.log("signInWithGoogle");
    this.authenticationService.signInWithGoogle();
    this.router.navigate(['/home']);
}

signInWithFacebook(){
    this.authenticationService.signInWithFacebook();
    this.router.navigate(['/home']);
}

signInWithTwitter(){
    this.authenticationService.signInWithTwitter();
    this.router.navigate(['/home']);
}

}
