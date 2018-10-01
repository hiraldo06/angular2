import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


//servicios
import {HeroesService,Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

heroes:any[]=[];

  constructor(private _heroesService:HeroesService,
              private router:Router) {


  }

  ngOnInit() {
    this.heroes=this._heroesService.getHeroes();
  }
  verHeroe(id:number){
    this.router.navigate(['/heroe',id]);
  }

}
