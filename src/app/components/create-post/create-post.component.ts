import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from "@app/models/post";
import { ValidadeFormService } from "@app/components/create-post/validade-form.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  postForm;
  post = {} as Post
  @Output() buttonClick: EventEmitter<Post> = new EventEmitter();

  constructor(public validadeFormService: ValidadeFormService) {
    this.postForm = this.validadeFormService.validatePostForm();
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caracteres restantes`;
  }

  emitClickEvent(post: Post): void {
    this.buttonClick.emit(post);
    this.postForm.reset();
  }

}
