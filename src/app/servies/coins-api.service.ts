import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class CoinsApiService {

  UrlLlist="https://api.coingecko.com/api/v3/coins";
  Url2="https://api.coingecko.com/api/v3/coins/bitcoin";

  coins:any[];
  

  constructor(private httpclient:HttpClient) {
    
  
   }

  httpGet():Observable<any[]>{
    return this.httpclient.get<any[]>(this.UrlLlist)
    }
   
        
}
