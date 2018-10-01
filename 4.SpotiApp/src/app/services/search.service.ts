import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

    private toke:string="BQCcexnP5AFfWCVH_tYderJO4dUT0s4DvuB8BmYvZYnq2iNV4zNFE6bTKUmnhDADbDlpS9_qshEGu4mrufs";
    private url:string="https://api.spotify.com/v1/";
    artistas:any[]=[];
    artista:any[]=[];
    top:any[]=[];
  constructor(private httpClient:HttpClient) {

   }

   private getHeader():HttpHeaders{
     let headers=new HttpHeaders({authorization:`Bearer ${this.toke}`});
     return headers;
   }

   getArtits(termino:string){
     let headers=this.getHeader();
     let url= `${this.url}search?query=${termino}&type=artist&offset=0&limit=20`;
      let rest=this.httpClient.get(url
                ,{headers}).map((resp:any)=>{
                  return resp.artists.items;
                });
     // console.log("services ready"+url);
      return rest;
   }

   getArtitsById(id:string){
     let headers=this.getHeader();
     let url= `${this.url}artists/${id}`;
      let rest=this.httpClient.get(url
                ,{headers});
     console.log("services ready"+url);
     return rest
   }

   getTop(id:string){
     let headers=this.getHeader();
     let url= `${this.url}artists/${id}/top-tracks?country=DO`;
      let rest=this.httpClient.get(url
                ,{headers}).map((resp:any)=>{
                  return resp.tracks;
                });
     console.log("services ready"+url);
     return rest
   }
}
