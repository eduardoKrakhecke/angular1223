import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUserService {

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  isModalOpen(): boolean {
    return this.showModal;
  }
}
