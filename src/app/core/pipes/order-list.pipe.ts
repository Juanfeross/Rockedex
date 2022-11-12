import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from '../../shared/interfaces/pkm-interface/pkm-interface';

@Pipe({
  name: 'orderlist'
})
export class OrderListPipe implements PipeTransform {

  transform(value: IPokemon[], args?: any): any {
    const list = value.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log(list);
    return list;
  }
}
