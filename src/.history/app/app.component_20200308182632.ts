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
 
 
  title = 'TestTableMarvel';
  datos: Observable<[]>;
  

  config: any;
  collection = { count: 60, data: [] };
 

  constructor(private actoresService: ActoresService) {
    this.datos =  this.actoresService.getAllActors();
  
 
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 60,
    };
  }
 
  pageChanged(event){
    this.config.currentPage = event;
  }
 
}
