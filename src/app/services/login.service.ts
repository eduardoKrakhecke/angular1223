import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Login } from "@app/models/login";
import { User } from "@app/models/user/user";
import { user } from "@app/models/user/user-data";

import { keys } from "@app/constants/keys";

import { ReplaySubject } from 'rxjs';

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from '@angular/fire/auth';



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

  async loginWithGoogle(): Promise<any> {
    try {
      const provider = new GoogleAuthProvider()
      const credential = await this.auth.signInWithPopup(provider)
      // @ts-ignore
      this.setToken(credential.credential?.accessToken)
      return credential
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

  logout(): void {
    localStorage.removeItem(keys.LOCAL_STORAGE_TOKEN);
    this.currentTokenSource.next(null);
    this.currentTokenSource.complete();
    this.router.navigateByUrl('/login');
  }


}
