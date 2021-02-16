import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
search(s:string){
 this.searchString=s

}
 searchString:string;

  constructor() {
   }

  ngOnInit(): void {
  }

}
