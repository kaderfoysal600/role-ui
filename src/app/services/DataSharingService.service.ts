import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {
    private loggedInKey = 'userLoggedIn';
    public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        this.getUserLoggedInStatusFromLocalStorage()
    );
    private getUserLoggedInStatusFromLocalStorage(): boolean {
        return localStorage.getItem(this.loggedInKey) === 'true';
      }
    
      public setUserLoggedInStatus(isLoggedIn: boolean): void {
        this.isUserLoggedIn.next(isLoggedIn);
        localStorage.setItem(this.loggedInKey, isLoggedIn.toString());
      }
}