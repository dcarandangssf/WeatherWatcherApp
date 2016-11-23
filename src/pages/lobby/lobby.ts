import { Component } from '@angular/core';
import { NavController, Nav, MenuController } from 'ionic-angular';
import 'rxjs/add/operator/map';
//  pages
import { WeatherCardPage } from '../weather-card/weather-card';
import { SearchResultsPage } from '../search-results/search-results';
import { CardListPage } from '../card-list/card-list';
//  providers
import { CardService } from '../../providers/card-service';


@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
  providers: [WeatherCardPage, SearchResultsPage, CardListPage]
})
export class LobbyPage {
  public cardList: any;
  
  constructor(
    public navCtrl: NavController,
    private menu: MenuController,
    public cardService: CardService) {
     
    }
    
  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
    this.menu.swipeEnable(true, 'menu1');
  }
  
  gotCardList(cardList) {
    this.cardList = cardList
  }
  
}
