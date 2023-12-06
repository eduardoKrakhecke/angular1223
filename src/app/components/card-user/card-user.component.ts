import { Component, Input  } from '@angular/core';
import { User } from "@app/models/user/user";

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent {
  @Input() user: User;
}
