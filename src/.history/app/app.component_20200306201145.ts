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
  data = [];
  data2 : any;
  constructor(private actoresService: ActoresService) { }
  
  allActores : Observable<any>;
  
  getAllActores(){
   
    this.data2 =  this.actoresService.getAllActors();
   
  }
  page = 0;
  size = 8;
  ngOnInit() {
    this.getAllActores();
    this.getData({pageIndex: this.page, pageSize: this.size});
    
  }
  getData(obj) {
    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;

    // this.data = this.data2.filter(() => {
    //   index++;
    //   return (index > startingIndex && index <= endingIndex) ? true : false;
    // });
  }
}
