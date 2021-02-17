import { Component, OnInit} from '@angular/core';

import { CoinsApiService } from 'src/app/servies/coins-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
coinses:any[];

search(s:string){
  this.searchString=s;
  this.change();
console.log("wiuche")
}
 searchString:string;

  constructor(private coins:CoinsApiService) {
    this.getall();
   }
 
    change(){
if(this.searchString!==""){
   this.coinses = this.coinses.filter(c=>c.symbol===this.searchString)
}
    }
  ngOnInit(): void {
    
  }
  getall():void{
    this.coins.httpGet().subscribe(
       ab=> {console.log(ab) ;this.coinses=ab} )
      
    } 
    
}
