import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  termino:string="";
  constructor(public _searchService:SearchService) {

  }
  getArtistas(){

      if(this.termino.length==0){
        return
      }

      this._searchService.getArtits(this.termino).subscribe(resp=>{
        this._searchService.artistas=resp;
      });

      

  }
  ngOnInit() {
  }

}
