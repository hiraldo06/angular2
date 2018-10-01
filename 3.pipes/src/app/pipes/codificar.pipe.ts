import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codificar'
})
export class CodificarPipe implements PipeTransform {

  transform(value: string, codificar: boolean): string {
    let result:string=value;
    if(codificar){
      result="";
      for (let _i=0;_i<value.length;_i++) {
          result+="*";
      }
    }
    console.log(codificar);
    return result;
  }

}
