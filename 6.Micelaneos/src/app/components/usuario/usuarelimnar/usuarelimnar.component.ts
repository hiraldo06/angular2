import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-usuarelimnar',
  templateUrl: './usuarelimnar.component.html',
  styles: []
})
export class UsuarelimnarComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute) {
    console.log("parametro del padre");
    this._activatedRoute.parent.params.subscribe(params=>{
      console.log(params);
    });
   }

  ngOnInit() {
  }

}
