import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "@app/services/login.service";
import { UserConnected } from "@app/models/user/user-connected";
import {keys} from "@app/constants/keys";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user = {} as UserConnected

  constructor(
    private loginService: LoginService,
    private router: Router,) {
  }

  showMenu(): boolean {
    this.getConnectedUser()
    return this.router.url != '/login';
  }

  getConnectedUser(): void {
    const storedUser = localStorage.getItem(keys.LOCAL_STORAGE_USER);
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      this.loginService.currentUser$.pipe().subscribe(user => {
        this.user = user;
      });
    }
  }
}
