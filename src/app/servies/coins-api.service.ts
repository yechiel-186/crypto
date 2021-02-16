import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoinsModel } from '../CoinsModel';




@Injectable({
  providedIn: 'root'
})
export class CoinsApiService {

  UrlLlist="https://api.coingecko.com/api/v3/coins";
  Url2="https://api.coingecko.com/api/v3/coins/bitcoin";

  coins:CoinsModel[];
  

  constructor(private httpclient:HttpClient) {
    
  
   }

  httpGet():Observable<CoinsModel[]>{
    return this.httpclient.get<CoinsModel[]>(this.UrlLlist)
    }
   
        
}
