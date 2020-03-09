import { Component, OnInit,ViewChild } from '@angular/core';
import { ActoresService } from '../services/actores.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {
  constructor(private actoresService: ActoresService) { }
  
  allActores : Observable<any>;
  
  getAllActores(){    
    this.allActores = this.actoresService.getAllActors();    
  }

  ngOnInit() {
    this.getAllActores();
  }

}
