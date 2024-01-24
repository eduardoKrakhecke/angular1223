import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { Comment } from "@app/models/comment";
import { ResourceService } from "@app/services/resource-service";

const BASEURL = environment.BASE_URL
const ENDPOINT = 'posts'
const NEXT_ENDPOINT = 'comments'

@Injectable({
  providedIn: 'root'
})
export class ComentService extends ResourceService<Comment>{

  BASE_URL = environment.BASE_URL

  constructor(private http: HttpClient) {
    super(http, `${BASEURL}`, `${ENDPOINT}`, `${NEXT_ENDPOINT}`)
  }

}
