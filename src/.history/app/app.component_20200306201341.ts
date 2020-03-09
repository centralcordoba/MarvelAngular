import { Component } from '@angular/core';
import { ActoresService } from './services/actores.service';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestTableMarvel';
  data : any;
  data2 : any;
  constructor(private actoresService: ActoresService) { }
  
  allActores : Observable<any>;
  
  getAllActores(){
   
    this.data =  this.actoresService.getAllActors();
   
  }
  page = 0;
  size = 8;
  ngOnInit() {
    this.getAllActores();
    
  }
 
}
