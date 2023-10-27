import { Pipe, PipeTransform } from '@angular/core';
import {ICoin} from "./coins/ICoin";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICoin[], search: string): ICoin[] {
    return value.filter(term => term.name.toLowerCase().includes(search.toLowerCase()));
  }

}
