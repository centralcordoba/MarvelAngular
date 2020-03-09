import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  contact: Array<Object>;
  key = 'c0d74510a8f3ff8dc8b0c4ad529d0af4';
  hash = 'c93b83519b73b4b8938e816e476693d9';
  actorDetail : any;
  url_marvel = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c0d74510a8f3ff8dc8b0c4ad529d0af4&hash=2a5f5dcb325a3d34fb2f3262bd6832c7';
  url_marvel_detail = 'https://gateway.marvel.com:443/v1/public/characters/{{this.actor}}?ts=1&apikey=c0d74510a8f3ff8dc8b0c4ad529d0af4&hash=2a5f5dcb325a3d34fb2f3262bd6832c7';
  constructor(private http: HttpClient) { }

  getAllActors (){
     return this.http.get<any>(this.url_marvel)
    .pipe(map((data:any)=> data.data.results))
  }

  getDetailActor (actor){
   
    this.url_marvel_detail = 'https://gateway.marvel.com:443/v1/public/characters/actordetail?ts=1&apikey=c0d74510a8f3ff8dc8b0c4ad529d0af4&hash=2a5f5dcb325a3d34fb2f3262bd6832c7';
    this.actorDetail =this.url_marvel_detail.replace('actordetail',actor);;
    return this.http.get<any>(this.url_marvel_detail)
   .pipe(map((data2:any)=> data2.data.results))
 }
}