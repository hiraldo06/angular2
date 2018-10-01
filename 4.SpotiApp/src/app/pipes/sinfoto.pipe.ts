import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[]): any {
    let sinFoto="./assets/img/noimage.png";
    if(value){
      sinFoto=(value.length>0)?value[1].url:sinFoto
    }
    return sinFoto;
  }

}
