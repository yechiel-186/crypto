import { Component, OnInit } from '@angular/core';
import { CoinsModel } from 'src/app/CoinsModel';
import { CoinsApiService } from 'src/app/servies/coins-api.service';


@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {
  
  coinses:CoinsModel[];
  constructor(private coins:CoinsApiService) { 
    
 
  }

  ngOnInit(): void {
 
}
  
}