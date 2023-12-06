import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from "@environments/environment";
import { Post } from "@app/models/post";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  BASE_URL = environment.BASE_URL

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/posts`).pipe(
      map((response: Post[]) => {
        return response
      })
    )
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.BASE_URL}/posts`, post).pipe(
      map((response: Post) => {
        return response
      })
    )
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.BASE_URL}/posts/${id}`).pipe(
      map((response: Post) => {
        return response
      })
    )
  }
}
