import { Component } from '@angular/core';
import { PostService } from "@app/services/post.service";
import { UserService } from "@app/services/user.service";
import { ToastService } from "@app/components/shared/toast/toast.service";
import { LoadingService } from "@app/components/shared/loading/loading.service";
import { ComentService } from "@app/services/coment.service";

import { messages } from "@app/constants/messages";

import { Post } from "@app/models/post";
import { User } from "@app/models/user/user";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  users: User[] = []
  posts: Post[] = []
  comments: Comment[] = []

  constructor(
    private loadingService: LoadingService,
    private userService: UserService,
    private commentService: ComentService,
    private toastService: ToastService,
    private postService: PostService) {
  }

  ngOnInit() {
    this.getUsers()
    this.getPosts()
  }

  getPosts(): void {
    this.loadingService.set(true)
    //setTimeout(()=>{
    this.postService.getPosts().subscribe(
      (response: Post[])=> {
        this.posts = response
        this.posts.forEach(post => {
          post.user = this.users.find(user => user.id === post.userId);
        });
        this.loadingService.set(false)
        console.log(this.posts)
      },
      (error: Error)=> {
        this.loadingService.set(false)
        this.toastService.showToast(messages.GENERIC_ERROR)
        console.error(error)
      }
    )
    //},4000)
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

  showComments(id: number) {
    this.commentService.getComentByIdPost(id).subscribe(
      (response: Comment[]) => {
        this.comments = response
        console.log(this.comments)
      },
      (error: Error) => {
        this.toastService.showToast(messages.GENERIC_ERROR)
        console.error(error)
      }
    )
  }

}
