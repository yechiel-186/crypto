import { Component, OnInit } from '@angular/core';

import { CoinsApiService } from 'src/app/servies/coins-api.service';


@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {
  showme:boolean=false;
  coinses:any[];
  constructor(private coins:CoinsApiService) { 
    
 
  }

  ngOnInit(): void {
 
}
clicked(){
  if(this.showme==false){
this.showme=true}
else if(this.showme==true){
  this.showme=false
}
} 
getall():void{
  this.coins.httpGet().subscribe(
     ab=> {console.log(ab) ;this.coinses=ab} )
    
  } 
}