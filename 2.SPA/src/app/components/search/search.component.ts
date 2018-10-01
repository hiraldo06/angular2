import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute} from '@angular/Router';
import {ActivatedRoute,Router} from '@angular/router';
//servicios
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  heroes:any []=[];
  termino:string="";
  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private _router:Router) {
    this._activatedRoute.params.subscribe(params=>{
      this.heroes=this._heroesService.getHeroeS(params["termino"]);
      this.termino=params['termino'];
    });
  }

  ngOnInit() {
  }
  verHeroe(nombre:string){
    this._router.navigate(['/heroe',nombre]);
  }

}
