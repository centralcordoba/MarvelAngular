import { Component,ViewChild , OnInit } from '@angular/core';
import { ActoresService } from './services/actores.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import {ModelActor} from '../app/actores/models/modelActor';
import { ActoresService } from '../.history/app/services/actores.service_20200308172017';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



  title = 'TestTableMarvel';
  datos: Observable<any>;
  data : any;
  data2 : any;
  dataLength: any;
  dataSource = null;

  constructor(private actoresService: ActoresService) { }
  
  allActores : Observable<any>;
  getAllActores(){
   
    this.datos =  this.actoresService.getAllActors();
    this.data.paginator = this.paginator;
  }
  
  ngOnInit() {
    // this.getAllActores();
    //  this.dataSource =this.datos;
    //  this.dataSource.paginator = this.paginator;


     
  this.actoresService.getAllActors().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.data = data;
    this.dataLength = data.length;

    this.dataSource.paginator = this.paginator;
    
  });
    
  }


 
}
