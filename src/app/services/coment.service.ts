import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ComentService {

  BASE_URL = environment.BASE_URL

  constructor(private http: HttpClient) { }


  getComentByIdPost(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.BASE_URL}/posts/${id}/comments`).pipe(
      map((response: Comment[]) => {
        return response
      })
    )
  }
}
