import { Geo } from "@app/models/user/geo";

export class Address {
  street:string
  city:string
  number:string
  zipcode:string
  geo: Geo
}
