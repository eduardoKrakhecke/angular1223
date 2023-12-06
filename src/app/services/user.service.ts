import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { User } from "@app/models/user/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = environment.BASE_URL

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/users`).pipe(
      map((response: User[]) => {
        return response
      })
    )
  }
}
