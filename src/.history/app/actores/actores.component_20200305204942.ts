import { Component, OnInit } from '@angular/core';
import { ActoresService } from '../services/actores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {
  
  // constructor(private actoresService: ActoresService) { }
  
  // allActores : Observable<any>;
  
  // getAllActores(){
  //   var test = 0;
  //   this.allActores = this.actoresService.getAllActors();
    
  
  //   alert('cantidad' + test)
  // }

  // ngOnInit() {
  //   this.getAllActores();
   
    
  // }

  data = [];
  data2 = [
    {id:1, url: 'https://images.freeimages.com/images/large-previews/996/easter-1399885.jpg'},
    {id:2, url: 'https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg'},
    {id:3, url: 'https://images.freeimages.com/images/large-previews/346/cemetery-1404186.jpg'},
    {id:4, url: 'https://images.freeimages.com/images/large-previews/310/resting-peacefully-1574880.jpg'},
    {id:5, url: 'https://images.freeimages.com/images/large-previews/aae/lomo-spider-1386711.jpg'},
    {id:6, url: 'https://images.freeimages.com/images/large-previews/996/easter-1399885.jpg'},
    {id:7, url: 'https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg'},
    {id:8, url: 'https://images.freeimages.com/images/large-previews/346/cemetery-1404186.jpg'},
    {id:1, url: 'https://images.freeimages.com/images/large-previews/996/easter-1399885.jpg'},
    {id:2, url: 'https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg'},
    {id:3, url: 'https://images.freeimages.com/images/large-previews/346/cemetery-1404186.jpg'},
    {id:4, url: 'https://images.freeimages.com/images/large-previews/310/resting-peacefully-1574880.jpg'},
    {id:5, url: 'https://images.freeimages.com/images/large-previews/aae/lomo-spider-1386711.jpg'},
    {id:6, url: 'https://images.freeimages.com/images/large-previews/996/easter-1399885.jpg'},
    {id:7, url: 'https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg'},
    {id:8, url: 'https://images.freeimages.com/images/large-previews/346/cemetery-1404186.jpg'}
  ];

  page = 0;
  size = 4;

  ngOnInit() {
    this.getData({pageIndex: this.page, pageSize: this.size});
  }

  getData(obj) {
    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;

    this.data = this.data2.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
}
