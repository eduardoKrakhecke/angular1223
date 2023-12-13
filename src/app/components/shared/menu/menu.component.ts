import { Component, Input } from '@angular/core';
import { UserConnected } from "@app/models/user/user-connected";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() user: UserConnected

  open() {
    const nav = document.getElementById("myTopnav") as HTMLElement;
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }

}
