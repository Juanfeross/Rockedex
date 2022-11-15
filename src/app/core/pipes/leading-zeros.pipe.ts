import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leadingZeros'
})
export class LeadingZerosPipe implements PipeTransform {

  transform(num: number, totalLength: number): string {
    return String(num).padStart(totalLength, '0');
  }
}
