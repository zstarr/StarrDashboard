import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ThemeService } from '../core/services/theme.service';
import { Observable } from 'rxjs';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'td-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  loggedIn = false;
  faTwitch = faTwitch;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
