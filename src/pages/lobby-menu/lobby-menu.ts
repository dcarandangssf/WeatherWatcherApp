import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, MenuController } from 'ionic-angular';
import 'rxjs/add/operator/map';

//  sidemenu pages
import { LoginPage } from '../login/login';
// import { LobbyPage } from '../lobby/lobby';
import { AccountSettingsPage } from '../account-settings/account-settings';

//  sidemenu providers
import { RestWWUser } from '../../providers/rest-ww-user';
import { CitiesRest } from '../../providers/cities-rest';
// import { CardService } from '../providers/card-service';

//  pages
import { WeatherCardPage } from '../weather-card/weather-card';
import { SearchResultsPage } from '../search-results/search-results';
import { CardListPage } from '../card-list/card-list';
//  providers
import { CardService } from '../../providers/card-service';


@Component({
  selector: 'page-lobby-menu',
  templateUrl: 'lobby-menu.html',
  providers: [WeatherCardPage, SearchResultsPage, CardListPage]
})
export class LobbyMenuPage {
  // @ViewChild(Nav) nav: Nav;
  // @ViewChild(NavController) navCtrl: NavController;
  
  rootPage: any;
  pages: Array<{title: string, component: any}>;
  cities: Array<{}>;
  public cardList: any;
  public savedCard: any;
  public cityName: any;
  
  constructor(
    public navCtrl: NavController,
    private menu: MenuController,
    public restWWUser: RestWWUser,
    public cardService: CardService,
    public searchResultsPage: SearchResultsPage,
    public citiesService: CitiesRest) {
      
      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'LobbyMenu', component: LobbyMenuPage },
        { title: 'Account Settings', component: AccountSettingsPage }
      ];
     
    }
    
  ionViewDidLoad() {
    console.log('Hello LobbyMenuPage');
    this.menu.swipeEnable(true, 'menu1');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    // this.nav.setRoot(page.component);
    this.navCtrl.setRoot(page.component);
  }
  
  deleteCity(card) {
    console.log("city deleted")
    console.log(card)
    this.cardService.deleteCard(card)
  }

  logout(token) {
    this.restWWUser.logout(window.localStorage.getItem('token'))
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.clear();
      // this.nav.setRoot(LoginPage);
      this.navCtrl.setRoot(LoginPage);
    }, err => {
      //because this is logging the user out, we don't need to worry about this here.
      // alert("Something went really wrong.");
      window.localStorage.clear();
      // this.nav.setRoot(LoginPage);
      this.navCtrl.setRoot(LoginPage);
    });
  }

  gotCardList(cardList) {
    this.cardList = cardList
  }

  getCard(card) {
    this.savedCard = card
    
    console.log("savedCard: ")
    console.log(this.savedCard)
    this.navCtrl.setRoot(LobbyMenuPage)
  }

}
