import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "@app/models/user/user";
import { user } from "@app/models/user/user-data";

import { keys } from "@app/constants/keys";

import { ReplaySubject } from 'rxjs';

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from '@angular/fire/auth';
import { UserConnected } from "@app/models/user/user-connected";



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) { }

  private currentTokenSource = new ReplaySubject<any>();
  public currentToken$ = this.currentTokenSource.asObservable();

  private currentUserSource = new ReplaySubject<any>();
  public currentUser$ = this.currentUserSource.asObservable();

  async loginWithGoogle(): Promise<any> {
    try {
      const provider = new GoogleAuthProvider()
      const response = await this.auth.signInWithPopup(provider)
      // @ts-ignore
      this.setToken(response.credential?.accessToken)
      this.setCurrentUser(response?.additionalUserInfo?.profile as UserConnected)
      return response
    } catch (e) {
      console.error(e)
    }
  }

  getUser(): User {
    return <User>user
  }

  public setToken(token: string): void {
    localStorage.setItem(keys.LOCAL_STORAGE_TOKEN, JSON.stringify(token));
    this.currentTokenSource.next(token);
  }

  public setCurrentUser(userConnected: UserConnected): void {
    localStorage.setItem(keys.LOCAL_STORAGE_USER,JSON.stringify(userConnected))
    this.currentUserSource.next(userConnected);
  }

  logout(): void {
    localStorage.removeItem(keys.LOCAL_STORAGE_TOKEN);
    localStorage.removeItem(keys.LOCAL_STORAGE_USER);
    this.currentTokenSource.next(null);
    this.currentTokenSource.complete();
    this.currentUserSource.next(null);
    this.currentUserSource.complete();
    this.router.navigateByUrl('/login');
  }


}
