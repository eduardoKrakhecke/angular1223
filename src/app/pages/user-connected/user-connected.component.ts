import { Component } from '@angular/core';
import { UserConnected } from "@app/models/user/user-connected";

import { keys } from "@app/constants/keys";
import { LoginService } from "@app/services/login.service";

@Component({
  selector: 'app-user-connected',
  templateUrl: './user-connected.component.html',
  styleUrls: ['./user-connected.component.scss']
})
export class UserConnectedComponent {

  userConnected = {} as UserConnected

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.getConnectedUser()
  }

  getConnectedUser(): void {
    const storedUser = localStorage.getItem(keys.LOCAL_STORAGE_USER);
    if (storedUser) {
      this.userConnected = JSON.parse(storedUser);

    } else {
      this.loginService.currentUser$.pipe().subscribe(user => {
        this.userConnected = user;
      });
    }
  }

}
