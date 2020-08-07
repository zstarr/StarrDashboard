import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {
  private _darkTheme: Subject<boolean> = null;
  isDarkTheme = null;
  localStorageKey: string = 'DarkTheme';

  constructor() {
    if (localStorage.getItem(this.localStorageKey) === null) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(true));
    }
    this._darkTheme = new BehaviorSubject<boolean>(
      JSON.parse(localStorage.getItem(this.localStorageKey))
    );
    this.isDarkTheme = this._darkTheme.asObservable();
  }

  setDarkTheme(isDarkTheme: boolean) {
    this._darkTheme.next(isDarkTheme);
    localStorage.setItem(this.localStorageKey, JSON.stringify(isDarkTheme));
  }
}
