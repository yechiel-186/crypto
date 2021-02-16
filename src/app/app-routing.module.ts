import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoinsListComponent } from './components/CoinsList/CoinsList.component';
import { SearchComponent } from './components/search/search.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Coins', component: CoinsListComponent },
  { path: 'Search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
