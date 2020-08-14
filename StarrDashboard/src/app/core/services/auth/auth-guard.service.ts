import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationExtras,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    // // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;

    // // Create a dummy session id
    // const sessionId = 123456789;

    // // Set our navigation extras object
    // // that contains our global query params and fragment
    // const navigationExtras: NavigationExtras = {
    //   queryParams: { session_id: sessionId },
    //   fragment: 'anchor',
    // };

    // // Navigate to the login page with extras
    // this.router.navigate(['/home'], navigationExtras);
     this.router.navigate(['/home']);
    return false;
  }
}
