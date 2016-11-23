import { Component, Input } from '@angular/core';
import { NavController, Nav, MenuController } from 'ionic-angular';
import { RestWeather } from '../../providers/rest-weather';
import { CitiesRest } from '../../providers/cities-rest';
// import { LocationService } from '../../providers/location-service'
import { CardService } from '../../providers/card-service'
import { WeatherCardPage } from '../weather-card/weather-card'
import { SearchResultsPage } from '../search-results/search-results'
import { CardListPage } from '../card-list/card-list'
import 'rxjs/add/operator/map';

/*
  Generated class for the Lobby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/  
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
