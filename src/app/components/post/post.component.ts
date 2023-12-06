import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from "@app/models/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  emitClickEvent(id: number | undefined): void {
    this.buttonClick.emit(id);
  }
}
