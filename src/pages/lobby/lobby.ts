import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, Nav, MenuController, NavParams } from 'ionic-angular';
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
  // @Output() gotSavedCard = new EventEmitter();
  public cardList: any;
  public savedCard: any;
  public results: any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menu: MenuController,
    public cardService: CardService,
    public searchResultsPage: SearchResultsPage) {
     
    }
    
  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
    this.menu.swipeEnable(true, 'menu1');
    this.savedCard = this.navParams.get('card')
    console.log('savedCard')
    console.log(this.savedCard)
    // this.gotSavedCard.emit(this.savedCard)
    
    
    //  currently unable to retrive data from search
    
    this.results = this.searchResultsPage.searchLocation(this.savedCard.cityName)
    console.log('results')
    console.log(this.results)
    // this.searchResultsPage.displayWeather(this.results[0])
  }
  
  // gotCardList(cardList) {
  //   this.cardList = cardList
  // }
  
  // gotSavedCard(savedCard) {
    
  // }
  
}
