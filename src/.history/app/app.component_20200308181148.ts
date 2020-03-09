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
    // for (var i = 0; i < this.collection.count; i++) {
    //   this.collection.data.push(
    //     {
    //       id: i + 1,
    //       value: "items number " + (i + 1)
    //     }
    //   );
    // }
 
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 20
    };
  }
 
  pageChanged(event){
    this.config.currentPage = event;
  }
  //   this.getAllActores();
  //   this.config = {
  //     itemsPerPage: 5,
  //     currentPage: 1,
  //     totalItems: this.datos,
  //   };

   
  // }
  // pageChanged(event){
  //   this.config.currentPage = event;
  // }

  // allActores : Observable<any>;
  // getAllActores(){   
  //   this.datos =  this.actoresService.getAllActors();    
  // }
  
  // ngOnInit() {
   
  // }

 
}
