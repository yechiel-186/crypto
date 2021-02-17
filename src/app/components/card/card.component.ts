import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

showme:boolean=false;
@Input () coins:any;
  constructor() { }

  ngOnInit(): void {
  }
clicked(){
  if(this.showme==false){
this.showme=true}
else if(this.showme==true){
  this.showme=false
}
}

}
