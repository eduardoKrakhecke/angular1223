import { Component } from '@angular/core';
import { PostService } from "@app/services/post.service";
import { UserService } from "@app/services/user.service";
import { ToastService } from "@app/components/shared/toast/toast.service";

import { messages } from "@app/constants/messages";

import { Post } from "@app/models/post";
import { User } from "@app/models/user/user";
import {LoadingService} from "@app/components/shared/loading/loading.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  users: User[] = []
  posts: Post[] = []

  constructor(
    private loadingService: LoadingService,
    private userService: UserService,
    private toastService: ToastService,
    private postService: PostService) {
  }

  ngOnInit() {
    this.getUsers()
    this.getPosts()
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(
      (response: Post[])=> {
        this.posts = response
        this.posts.forEach(post => {
          post.user = this.users.find(user => user.id === post.userId);
        });
        console.log(this.posts)
      },
      (error: Error)=> {
        this.toastService.showToast(messages.GENERIC_ERROR)
        console.error(error)
      }
    )
  }

  getUsers(): void {
    this.loadingService.set(true)
    //setTimeout(()=>{
      this.userService.getUsers().subscribe(
        (response: User[]) => {
          this.users = response
          this.loadingService.set(false)
        },
        (error: Error) => {
          this.toastService.showToast(messages.GENERIC_ERROR)
          console.error(error)
        }
      )
    //},4000)

  }

}
