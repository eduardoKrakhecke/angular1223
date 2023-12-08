import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalUserService } from "@app/components/modal-user/modal-user.service";
import { AppUser } from "@app/models/user/app-user";

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent {

  @Input() appUser: AppUser;

  constructor(public modalUserService: ModalUserService) {
  }

   closeModal(): void {
    this.modalUserService.closeModal();
  }


}
