import { Component, OnInit } from '@angular/core';
import { ActoresService } from './services/actores.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
 
  title = 'TestTableMarvel';
  datos: Observable<[]>;
  datosDetail: Observable<[]>;

  config: any;
  collection = { count: 60, data: [] };
 

  constructor(private actoresService: ActoresService) {
    this.datos =  this.actoresService.getAllActors();
  
 
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 20,
    };
  }
 
  pageChanged(event){
    this.config.currentPage = event;
  }

  getDetail(actor){
    this.datosDetail = this.actoresService.getDetailActor(actor);
  }

  ngOnInit() {
        
  }
 
}
