import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { LobbyPage } from '../pages/lobby/lobby';
import { AccountSettingsPage } from '../pages/account-settings/account-settings';

import { RestWWUser } from '../providers/rest-ww-user';
import { SavedCitiesService } from '../providers/saved-cities-service';

@Component({
  templateUrl: 'app.html'
  // `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  cities: Array<{name: string}>;

  saved: any;

  constructor(
    public platform: Platform,
    public restWWUser: RestWWUser,
    public citiesService: SavedCitiesService) {
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
  
      this.citiesService.getList(window.localStorage.getItem('userId'), window.localStorage.getItem('token'))
       .map(res => res.json())
        .subscribe(res => {
          this.saved = res;
          console.log(this.saved);
        }, err => {
          console.log("Warning Will Robinson! \n" + err);
        });
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
  
}
