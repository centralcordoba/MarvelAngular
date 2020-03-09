import { Component,ViewChild , OnInit } from '@angular/core';
import { ActoresService } from './services/actores.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import {ModelActor} from '../app/actores/models/modelActor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  title = 'TestTableMarvel';
  datos: Observable<any>;
  config: any;

  constructor(private actoresService: ActoresService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 20,
    };
  }
  
  allActores : Observable<any>;
  getAllActores(){
   
    this.datos =  this.actoresService.getAllActors();
    
  }
  
  ngOnInit() {
    this.getAllActores();
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
