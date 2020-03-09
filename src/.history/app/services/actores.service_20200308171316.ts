import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/Operators';
import { ModelActor } from '../../.history/app/actores/models/modelActor_20200308171111';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  key = 'c0d74510a8f3ff8dc8b0c4ad529d0af4';
  hash = 'c93b83519b73b4b8938e816e476693d9';
  url_marvel = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c0d74510a8f3ff8dc8b0c4ad529d0af4&hash=2a5f5dcb325a3d34fb2f3262bd6832c7';
  constructor(private http: HttpClient) { }

  getAllActors (){
    return this.http.get<ModelActor>(this.url_marvel)
    .pipe(map((data:ModelActor)=> data))
  }
}
