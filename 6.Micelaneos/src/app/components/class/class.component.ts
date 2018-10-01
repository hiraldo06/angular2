import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  alerta:string="alert-info";
  propiedad={
    danger:false
  }
  loading:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  proceso(){
    this.loading=true;
    console.log("Procesos");
    setTimeout(()=>{this.loading = false;
    console.log(this.loading)} ,3000);
  }

}
