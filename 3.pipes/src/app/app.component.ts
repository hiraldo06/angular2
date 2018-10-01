import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string="Juan Perez";
  numero:number=0.12334;
  decimales:number=Math.PI;
  moneda:number=3423432;
  objecto={
    nombre:"Juan Lopez",
    edad:30,
    direccion:{
      numero:2,
      ciudad:"Santiago"
    }
  }
  promesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("Promesa realizada")},1500);
  });
  personalizada:string="Luis polonia";
  video="grl-vNfr5-E";

  contrasena="pedrojuan";
  codif=true;
  fecha=new Date();
}
