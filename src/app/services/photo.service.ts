import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "@environments/environment";

import { map } from "rxjs/operators";
import { Photo } from "@app/models/photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  BASE_URL = environment.BASE_URL

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.BASE_URL}/photos`).pipe(
      map((response: Photo[]) => {
        return response
      })
    )
  }
}
