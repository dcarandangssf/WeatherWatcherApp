import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { LobbyPage } from '../pages/lobby/lobby';
import { AccountSettingsPage } from '../pages/account-settings/account-settings';

import { RestWWUser } from '../providers/rest-ww-user';
import { CitiesRest } from '../providers/cities-rest';
import { CardService } from '../providers/card-service';

@Component({
  templateUrl: 'app.html'
  // `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  cities: Array<{}>;

  saved: any;

  constructor(
    public platform: Platform,
    public restWWUser: RestWWUser,
    public cardService: CardService,
    public citiesService: CitiesRest) {
      this.initializeApp();

      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Lobby', component: LobbyPage },
        { title: 'Account Settings', component: AccountSettingsPage }
      ];
      
      
      this.cities = [
        { name: 'San Diego, CA' },
        { name: 'Los Angeles, CA' },
        { name: 'San Francisco, CA' }
      ];
  
    // this.cardService.getCardList(window.localStorage.getItem('userId'), window.localStorage.getItem('token'))
    //   .map(res => res.json())
    //     .subscribe(res => {
    //       this.cardList = res;
    //       // this.cardList = res || [];
    //       console.log("cardList")
    //       console.log(this.cardList)
    //       return this.cardList
    //     }, err => {
    //       alert("Warning Will Robinson!");
    //       // this.cardList = [];
    //     });
    
      }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goToCity(cardList) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(cardList.component);
    console.log(cardList)
    console.log("sidemenu cardlist")
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
      this.nav.setRoot(LoginPage);
    }, err => {
      //because this is logging the user out, we don't need to worry about this here.
      // alert("Something went really wrong.");
      window.localStorage.clear();
      this.nav.setRoot(LoginPage);
    });
    // this.restWWUser.logout
    // this.nav.setRoot(LoginPage);
  }
  
  // ionViewDidLeave() {
  //   this.cities = this.cardService.getCardList()
  //   console.log(this.cities)
  // }
      
}
