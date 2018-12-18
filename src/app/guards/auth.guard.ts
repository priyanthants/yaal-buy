import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser = this.authenticationService.user;
    const logedin=this.authenticationService.isLoggedIn();
    console.log(currentUser);
    
    if (logedin) {
      console.log(currentUser);
      return true;
    }

    this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
