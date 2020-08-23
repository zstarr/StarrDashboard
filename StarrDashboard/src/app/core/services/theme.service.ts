import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable()
export class ThemeService {
  private _darkTheme: Subject<boolean> = null;
  isDarkTheme = null;
  localStorageKey: string = 'DarkTheme';
  overlayContainerState: OverlayContainer;

  constructor(overlayContainer: OverlayContainer) {    
    this.overlayContainerState = overlayContainer;
    if (localStorage.getItem(this.localStorageKey) === null) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(true));      
    }
    this._darkTheme = new BehaviorSubject<boolean>(
      JSON.parse(localStorage.getItem(this.localStorageKey))
    );
    this.isDarkTheme = this._darkTheme.asObservable();    
    this.setOverlayClass(JSON.parse(localStorage.getItem(this.localStorageKey)));
  }

  setDarkTheme(isDarkTheme: boolean) {
    this._darkTheme.next(isDarkTheme);
    this.setOverlayClass(isDarkTheme);    
    localStorage.setItem(this.localStorageKey, JSON.stringify(isDarkTheme));
  }

  setOverlayClass(isDarkTheme: boolean) {
    if (isDarkTheme) {
      this.overlayContainerState.getContainerElement().classList.remove('light-theme')
      this.overlayContainerState.getContainerElement().classList.add('dark-theme');
      }
    else {
      this.overlayContainerState.getContainerElement().classList.remove('dark-theme')
      this.overlayContainerState.getContainerElement().classList.add('light-theme');
      }
  }
}
