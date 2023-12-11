import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from "@environments/environment";
import { Address } from "@app/modules/lazyloading/models/address";


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  BASE_URL = environment.BASE_URL_CEP

  constructor(private http: HttpClient) { }

  getAddress(cep: string): Observable<Address> {
    return this.http.get<Address>(`${this.BASE_URL}/${cep}/json`).pipe(
      map((response: Address) => {
        return response
      })
    )
  }
}
