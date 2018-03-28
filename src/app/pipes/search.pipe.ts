import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(a, s) {
    return a.filter(e => {
      return e.Name.includes(s);
    });
  }
}
