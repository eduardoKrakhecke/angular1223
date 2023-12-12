import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Login } from "@app/models/login";
import { User } from "@app/models/user/user";
import { user } from "@app/models/user/user-data";

import { keys } from "@app/constants/keys";

import { ReplaySubject } from 'rxjs';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { environment } from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private firebaseApp = initializeApp(environment.firebaseConfig);
  private analytics = getAnalytics(this.firebaseApp);

  constructor(private router: Router) { }

  private currentTokenSource = new ReplaySubject<any>;
  public currentToken$ = this.currentTokenSource.asObservable();

  login(login: Login): boolean {
    if(login.email === 'ed@gmail.com' && login.password === '123'){
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lI'
      this.setToken(token)
      return true
    } else {
      return false
    }
  }

  getUser(): User {
    return <User>user
  }

  public setToken(token: string): void {
    localStorage.setItem(keys.LOCAL_STORAGE_TOKEN, JSON.stringify(token));
    this.currentTokenSource.next(token);
  }

  logout(): void {
    localStorage.removeItem(keys.LOCAL_STORAGE_TOKEN);
    this.currentTokenSource.next(null);
    this.currentTokenSource.complete();
    this.router.navigateByUrl('/login');
  }


}
