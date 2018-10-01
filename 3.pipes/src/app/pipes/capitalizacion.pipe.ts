import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizada'
})
export class CapitalizacionPipe implements PipeTransform {

  transform(value: string, capitalizada:boolean=true): string {
    let valor=value.split(" ");

    if(capitalizada){
      for (let i in valor) {
          valor[i]=valor[i][0].toUpperCase()+valor[i].substr(1);
      }
    }else{
        valor[0]=valor[0][0].toUpperCase()+valor[0].substr(1);
    }

    return valor.join(" ");
  }

}
