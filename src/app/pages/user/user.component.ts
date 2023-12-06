import { Component } from '@angular/core';
import { UserService } from "@app/services/user.service";
import { ToastService } from "@app/components/shared/toast/toast.service";
import { User } from "@app/models/user/user";
import { messages } from "@app/constants/messages";

import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  //user = {} as User
  users: User[] = []

  constructor(private userService: UserService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response
      },
      (error: Error) => {
        this.toastService.showToast(messages.GENERIC_ERROR)
        console.error(error)
      }
    )
  }

}
