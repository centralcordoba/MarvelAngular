import { Component } from '@angular/core';
import { ActoresService } from '../services/actores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestTableMarvel';
  constructor(private actoresService: ActoresService) { }
  
  allActores : Observable<any>;
  
  getAllActores(){
    var test = 0;
    this.allActores = this.actoresService.getAllActors();
    
  
    alert('cantidad' + test)
  }

  ngOnInit() {
    this.getAllActores();
   
    
  }
}
