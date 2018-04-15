import { Pipe, PipeTransform } from '@angular/core';
/** Dependencies */
import * as moment from 'moment';

@Pipe({
  name: 'formatoFecha',
})
export class FormatoFechaPipe implements PipeTransform {
  
  transform(value: Date) {
    return moment(value).format('DD/MM/YYYY');
  }
}