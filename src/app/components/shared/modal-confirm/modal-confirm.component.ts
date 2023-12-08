import { Component, Input } from '@angular/core';
import {ModalConfirmService} from "@app/components/shared/modal-confirm/modal-confirm.service";

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {

  @Input() title: string;
  @Input() message: string;

  constructor(public modalConfirmService: ModalConfirmService) {
  }

  confirm(): void {
    this.modalConfirmService.confirmAction(true);
    this.closeModal();
  }

  cancel(): void {
    this.modalConfirmService.confirmAction(false);
    this.closeModal();
  }

  private closeModal(): void {
    this.modalConfirmService.closeModal();
  }

}
