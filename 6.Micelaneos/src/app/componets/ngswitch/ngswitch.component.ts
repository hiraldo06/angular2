import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  condicion:number=null;
  constructor() { }

  ngOnInit() {
  }
  cambiar(){
    if(this.condicion>7){
      this.condicion=null;
    }else if(this.condicion !=null){
      this.condicion=this.condicion+1;
    }else{
      this.condicion=1;
    }
  }
}
