import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from "../core/services/auth/auth.service";
import { ThemeService } from '../core/services/theme.service';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent {
  faTwitch = faTwitch;
  isDarkTheme: Observable<boolean>;
  
  constructor(public authService: AuthService, public router: Router, private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  login() {    

    this.authService.login().subscribe(() => {      
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/dashboard';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['home']);
  }
}