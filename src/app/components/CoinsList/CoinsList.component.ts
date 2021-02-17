
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { CoinsApiService } from 'src/app/servies/coins-api.service';




@Component({
  selector: 'app-CoinsList',
  templateUrl: './CoinsList.component.html',
  styleUrls: ['./CoinsList.component.css']
})
export class CoinsListComponent implements OnInit {
 @Input() search:string;
  coinses:any[];
  
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
     
}