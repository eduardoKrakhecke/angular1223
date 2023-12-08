import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from "@angular/common";

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string): string {
    const cleanedDate = value.replace(/\s/, '');
    const date = new Date(cleanedDate);

    if (!isNaN(date.getTime())) {
      return <string>new DatePipe('en-US').transform(date, 'dd/MM/yyyy');
    } else {
      return value;
    }
  }

}
