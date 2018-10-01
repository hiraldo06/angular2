import {Component} from "@angular/core";

@Component({
  selector:"app-body",
  templateUrl:'body.component.html'
})

export class BodyComponet{
  mostrar:boolean=false;
  frase:any={
    descripcion:"La felicidad vale mas que el dinero",
    autor:'JAHA'
  }
  personas:string[]=["Juan Lopez","Pedro Garcia","Jose de las Matas","Simon Castro"];
}
