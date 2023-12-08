import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSlash'
})
export class RemoveSlashPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\\/g, '');
  }

}
