import { Component, OnInit, Output ,EventEmitter} from '@angular/core';





@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 

  search(s:string){
    this.searchevent.emit(s)
  }
  
  @Output () searchevent:EventEmitter<string>;
  constructor() {
  this.searchevent=new EventEmitter<string>()
   }

  ngOnInit(): void {
  }
 }

