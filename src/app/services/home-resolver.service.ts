import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map } from "rxjs/operators";

import { UserService } from "@app/services/user.service";
import { PostService } from "@app/services/post.service";
import { ToastService } from "@app/components/shared/toast/toast.service";

import { messages } from "@app/constants/messages";


@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<any> {

  constructor(
    private toastService: ToastService,
    private userService: UserService,
    private postService: PostService
  ) { }

  resolve(): Observable<any> {
    return forkJoin([
      this.postService.getPosts(),
      this.userService.getUsers()
    ]).pipe(map(([posts, users]) => ({ posts, users })),
      catchError(error => {
        this.toastService.showToast(messages.GENERIC_ERROR)
        console.error(error)
        return of({ posts: [], users: [] });
      })
    )
  }
}
