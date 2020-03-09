import { Component,ViewChild , OnInit } from '@angular/core';
import { ActoresService } from './services/actores.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import {ModelActor} from '../app/actores/models/modelActor';
import { ModelActor } from '../.history/app/actores/models/modelActor_20200308171111';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  title = 'TestTableMarvel';
  datos: Observable<ModelActor>;


  constructor(private actoresService: ActoresService) { }
  
  allActores : Observable<any>;
  getAllActores(){
   
    this.datos =  this.actoresService.getAllActors();
    
  }
  
  ngOnInit() {
    this.getAllActores();
  }
}
