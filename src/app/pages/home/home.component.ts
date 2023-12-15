import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastService } from "@app/components/shared/toast/toast.service";
import { LoaderService } from "@app/components/shared/loader/loader.service";
import { ComentService } from "@app/services/coment.service";
import { ModalConfirmService } from "@app/components/shared/modal-confirm/modal-confirm.service";
import { PostService } from "@app/services/post.service";
import { ModalUserService } from "@app/components/modal-user/modal-user.service";

import { messages } from "@app/constants/messages";

import { Post } from "@app/models/post";
import { User } from "@app/models/user/user";
import { Comment } from "@app/models/comment";
import { AppUser } from "@app/models/user/app-user";

import { appUserFakeData } from "@app/mock/user-data";

import { fadeIn } from "@app/functions/animations";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeIn],
})
export class HomeComponent {

  users: User[] = []
  posts: Post[] = []
  post = {} as Post
  comments: Comment[] = []
  appUser = {} as AppUser
  postCommentsMap: Map<number | undefined, Comment[]> = new Map<number | undefined, Comment[]>();
  data: any
  isLoading: boolean = false

  constructor(
    private cdr: ChangeDetectorRef,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private commentService: ComentService,
    private postService: PostService,
    private modalConfirmService: ModalConfirmService,
    private modalUserService: ModalUserService,
    private toastService: ToastService,) {

    this.data = this.route.snapshot.data['data'];
    this.posts = this.data.posts;
    this.users = this.data.users
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true
      this.loaderService.showLoading(!this.isLoading)

      this.posts.forEach(post => {
        post.user = this.users.find(user => user.id === post.userId);
      });
    }, 1000);
    this.isLoading = false
    this.loaderService.showLoading(!this.isLoading)

  }

  showComments(obj: any) {
   if(obj.isExpanded) {
     if (!this.postCommentsMap.has(obj.id)) {
       this.commentService.getComentByIdPost(obj.id).subscribe(
         (response: Comment[]) => {
           this.postCommentsMap.set(obj.id, response);
           console.log(this.postCommentsMap.get(obj.id));
         },
         (error: Error) => {
           this.toastService.showToast(messages.GENERIC_ERROR);
           console.error(error);
         }
       );
     }
   }
  }

  removePostById(id: number): void {
    this.postService.deletePost(id).subscribe(
      () => {
        this.posts = this.posts.filter(post => post.id !== id);
        this.toastService.showToast(messages.GENERIC_SUCCESS);
      },
      (error: Error) => {
        this.toastService.showToast(messages.GENERIC_ERROR);
        console.error(error);
      }
    )
  }

  handleClickUser(email: string): void {
     this.appUser = appUserFakeData.find(user => user.email === email) as AppUser
     if(this.appUser) {
       this.modalUserService.openModal()
     } else {
       //TODO toast não abre as vezes obs: modal parece influenciar
       this.toastService.showToast(messages.NO_DATA)
     }
  }

  handleClickRemove(postId: number): void {
    this.modalConfirmService.openModal();
    this.modalConfirmService.getConfirmation().subscribe((confirm: boolean) => {
      if (confirm) {
        this.removePostById(postId);
      }
    });
  }

  createPost(post: Post): void {
    this.postService.addPost(post).subscribe(
      (response: Post) => {
        response.created_at = new Date().getTime()
        this.posts.unshift(response)
        this.cdr.detectChanges();
      },
      (error: Error) => {
        this.toastService.showToast(messages.GENERIC_ERROR);
        console.error(error);
      }
    )
  }

}
