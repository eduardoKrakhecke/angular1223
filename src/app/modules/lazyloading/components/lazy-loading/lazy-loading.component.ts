import { Component } from '@angular/core';
import { AddressService } from "@app/modules/lazyloading/services/address.service";

import { Address } from "@app/modules/lazyloading/models/address";
import { ToastService } from "@app/components/shared/toast/toast.service";
import { messages } from "@app/constants/messages";

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent {

  address = {} as Address
  cep : number

  constructor(
    private toastService: ToastService,
    private addressService: AddressService
  ) {
  }


  getAddress(): void {
    if(this.cep.toString().length === 8) {
      this.addressService.getAddress(this.cep.toString()).subscribe(
        (response: Address) => {
          this.address = response
        },
        (error: Error) => {
          this.toastService.showToast(messages.GENERIC_ERROR)
          console.error(error)
        }
      )
    }
  }

}
