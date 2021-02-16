import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponent } from './components/routing/routing.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { SearchComponent } from './components/search/search.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { CoinsListComponent } from './components/CoinsList/CoinsList.component';
import { CoinsApiService } from './servies/coins-api.service';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HomeComponent,
    AboutComponent,
    CoinsListComponent,
    SearchComponent,
    MoreInfoComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
