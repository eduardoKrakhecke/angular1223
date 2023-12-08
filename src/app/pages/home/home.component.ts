import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastService } from "@app/components/shared/toast/toast.service";
import { LoadingService } from "@app/components/shared/loading/loading.service";
import { ComentService } from "@app/services/coment.service";

import { messages } from "@app/constants/messages";

import { Post } from "@app/models/post";
import { User } from "@app/models/user/user";
import { Comment } from "@app/models/comment";
import {ModalConfirmService} from "@app/components/shared/modal-confirm/modal-confirm.service";
import {PostService} from "@app/services/post.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  users: User[] = []
  posts: Post[] = []
  comments: Comment[] = []
  postCommentsMap: Map<number | undefined, Comment[]> = new Map<number | undefined, Comment[]>();
  data: any

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private commentService: ComentService,
    private postService: PostService,
    private modalConfirmService: ModalConfirmService,
    private toastService: ToastService,) {

    this.data = this.route.snapshot.data['data'];
    this.posts = this.data.posts;
    this.users = this.data.users
  }

  ngOnInit() {
    this.posts.forEach(post => {
      post.user = this.users.find(user => user.id === post.userId);
    });
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

  handleClickRemove(postId: number): void {
    this.modalConfirmService.openModal();
    this.modalConfirmService.getConfirmation().subscribe((confirm: boolean) => {
      if (confirm) {
        this.removePostById(postId);
      }
    });
  }

}
