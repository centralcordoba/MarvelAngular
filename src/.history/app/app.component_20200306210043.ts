import { Component,ViewChild , OnInit } from '@angular/core';
import { ActoresService } from './services/actores.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  title = 'TestTableMarvel';
  data : any;
  data2 : any;
  constructor(private actoresService: ActoresService) { }
  
  allActores : Observable<any>;
  
  getAllActores(){
   
    this.data =  this.actoresService.getAllActors();
    this.data.paginator = this.paginator;
  }
  
  ngOnInit() {
    this.getAllActores();
    
  }
 
}
