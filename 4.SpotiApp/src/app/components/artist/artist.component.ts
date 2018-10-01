import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,public _searchService: SearchService ) {

    this.activatedRoute.params.
                      subscribe(params=>{
      console.log(params);
      this._searchService.getArtitsById(params['id']).subscribe((resp:any)=>{
        this._searchService.artista=resp;
      });
      this._searchService.getTop(params['id']).subscribe((resp:any)=>{
        this._searchService.top=resp;
        console.log(resp);
      });
    })

  }

  ngOnInit() {
  }

}
