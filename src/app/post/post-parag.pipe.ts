import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postParag'
})
export class PostParagPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let idx;
    idx = value.search('</p>');
    let result;
    result = value.slice(3, idx);
    return result;
  }

}
