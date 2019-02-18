import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagToText'
})
export class TagToTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const valores: any = {
      '<p>': '',
      '</p>': '\n'
    };
    let str: string;
    if(value){
      str = value.replace(/<p>|<\/p>/gi, function(matched) {
        return valores[matched];
     });
    }
      
    return str;

  }

}
