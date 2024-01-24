import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { Post } from "@app/models/post";
import { ResourceService } from "@app/services/resource-service";

const ENDPOINT = 'posts'
const BASEURL =  environment.BASE_URL

@Injectable({
  providedIn: 'root'
})
export class PostService extends ResourceService<Post> {

  constructor(private http: HttpClient) {
    super(http, `${BASEURL}`, `${ENDPOINT}`, '')
  }

}
