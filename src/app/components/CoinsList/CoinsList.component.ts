
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CoinsModel } from 'src/app/CoinsModel';
import { CoinsApiService } from 'src/app/servies/coins-api.service';




@Component({
  selector: 'app-CoinsList',
  templateUrl: './CoinsList.component.html',
  styleUrls: ['./CoinsList.component.css']
})
export class CoinsListComponent implements OnInit,OnChanges {
 @Input() search:string;
  coinses:CoinsModel[];
  showme:boolean=false;
  constructor(private coins:CoinsApiService) {  
   
    }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.search.currentValue){
      this.coinses = this.coinses.filter(c=>c.symbol===this.search)
    }
    
  }
   

  ngOnInit(): void {
   this.getall();
   
}

 getall():void{
      this.coins.httpGet().subscribe(
         ab=> {console.log(ab) ;this.coinses=ab} )
        
      } 
      onuserclick():void{
        this.showme=true;
        this.coins.httpGet().subscribe(
           ab=> {console.log(ab) ;this.coinses=ab} )
        } 
}