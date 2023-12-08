import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from "@app/models/post";
import { Comment } from "@app/models/comment";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post
  @Input() comments: Comment[]
  @Output() removeClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() userClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() buttonClick: EventEmitter<{ id: number | undefined, isExpanded: boolean }> = new EventEmitter();
  isExpanded: boolean = false;

  emitClickEvent(id: number | undefined): void {
    this.buttonClick.emit({ id, isExpanded: !this.isExpanded });
    this.isExpanded = !this.isExpanded;
  }

  handleClick(id: number | undefined): void {
    this.removeClicked.emit(id);
  }

  handleCLickUser(email: string): void {
    this.userClicked.emit(email)
  }

}
